import { useState, useEffect } from 'react';
import { TabType, PortfolioItem, GearProduct } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { RawInspectionModal } from './components/RawInspectionModal';
import { ProfileModal } from './components/ProfileModal';
import { PreorderModal } from './components/PreorderModal';
import { PortafolioScreen } from './components/screens/PortafolioScreen';
import { ExpedicionesScreen } from './components/screens/ExpedicionesScreen';
import { GearStoreScreen } from './components/screens/GearStoreScreen';
import { ServiciosScreen } from './components/screens/ServiciosScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('portafolio');
  const [favorites, setFavorites] = useState<string[]>(['item-1']);
  const [bookmarks, setBookmarks] = useState<string[]>(['gear-1']);
  const [inspectingItem, setInspectingItem] = useState<PortfolioItem | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [preorderingProduct, setPreorderingProduct] = useState<GearProduct | null>(null);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenRawInspection = (item: PortfolioItem) => {
    setInspectingItem(item);
  };

  const handleCloseRawInspection = () => {
    setInspectingItem(null);
  };

  const handleConfirmPreorder = (product: GearProduct) => {
    if (!bookmarks.includes(product.id)) {
      setBookmarks((prev) => [...prev, product.id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#111317] text-[#e2e2e8] flex flex-col selection:bg-[#ff5722] selection:text-white">
      {/* Fixed Top Header */}
      <Header
        activeTab={activeTab}
        onOpenProfile={() => setIsProfileOpen(true)}
        onNavigateHome={() => setActiveTab('portafolio')}
        favoritesCount={favorites.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16 pb-24 bg-[#111317]">
        {activeTab === 'portafolio' && (
          <PortafolioScreen
            onOpenRawInspection={handleOpenRawInspection}
            onNavigateToExpeditions={() => setActiveTab('expediciones')}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {activeTab === 'expediciones' && (
          <ExpedicionesScreen
            onNavigateToGear={() => setActiveTab('gear-store')}
            onOpenRawInspection={handleOpenRawInspection}
          />
        )}

        {activeTab === 'gear-store' && (
          <GearStoreScreen
            onPreorder={(product) => setPreorderingProduct(product)}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onOpenRawInspection={handleOpenRawInspection}
          />
        )}

        {activeTab === 'servicios' && <ServiciosScreen />}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onChangeTab={(tab) => setActiveTab(tab)}
        bookmarksCount={bookmarks.length}
      />

      {/* RAW Inspection Viewfinder Modal */}
      <RawInspectionModal
        item={inspectingItem}
        isOpen={Boolean(inspectingItem)}
        onClose={handleCloseRawInspection}
      />

      {/* Photographer Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onNavigateToBooking={() => {
          setActiveTab('servicios');
          setTimeout(() => {
            document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }}
      />

      {/* Gear Preorder Reservation Dialog */}
      <PreorderModal
        product={preorderingProduct}
        isOpen={Boolean(preorderingProduct)}
        onClose={() => setPreorderingProduct(null)}
        onConfirm={handleConfirmPreorder}
      />
    </div>
  );
}
