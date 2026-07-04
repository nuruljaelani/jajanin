import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Plus, Minus, MapPin, Coffee, Cookie, Phone,  } from 'lucide-react';
import { products } from './data/products';
import { useCartStore } from './store/useCartStore';
import { formatCurrency, generateWaLink } from './utils/whatsapp';

function App() {
  const { items, addItem, decrementItem, getTotalItems, getTotalPrice } = useCartStore();
  const [activeCategory, setActiveCategory] = useState<'semua' | 'makanan' | 'minuman'>('semua');

  const filteredProducts = products.filter(
    (p) => activeCategory === 'semua' || p.category === activeCategory
  );

  return (
    <div className="min-h-screen pb-32">
      {/* Header / Hero */}
      <header className="bg-acid-green text-charcoal px-6 py-12 border-b-4 border-charcoal">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-md mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/logo_small_crop.png" 
              alt="Logo Jajanin" 
              className="h-28 w-auto object-contain" 
            />
            <h1 className="font-display font-bold text-4xl uppercase tracking-tighter leading-none">
              Jajanin<br/>Terus!
            </h1>
          </div>
          <p className="font-medium text-lg border-l-4 border-charcoal pl-4">
            Jajanan kekinian & minuman seger buat nemenin harimu. Order gampang, tinggal klik WA.
          </p>
        </motion.div>
      </header>

      {/* Category Filter */}
      <div className="sticky top-0 z-10 bg-charcoal border-b-4 border-charcoal p-4 shadow-xl">
        <div className="max-w-md mx-auto flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['semua', 'makanan', 'minuman'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as 'semua' | 'makanan' | 'minuman')}
              className={`flex-shrink-0 px-6 py-2 font-bold uppercase tracking-wide neo-brutalism transition-transform ${
                activeCategory === cat ? 'bg-hot-orange text-off-white neo-brutalism-orange translate-x-[2px] translate-y-[2px] shadow-none' : 'bg-off-white text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      <main className="max-w-md mx-auto p-4 pt-8">
        <div className="grid grid-cols-2 gap-4">
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const isProductReady = product.isReady !== false;
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-off-white text-charcoal flex flex-col neo-brutalism relative transition-all duration-300 ${
                    isProductReady ? '' : 'opacity-65'
                  }`}
                >
                  <div className="aspect-square border-b-2 border-charcoal overflow-hidden bg-charcoal relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isProductReady ? '' : 'filter blur-[1.5px] grayscale opacity-50'
                      }`}
                    />
                    {!isProductReady && (
                      <div className="absolute top-2 left-2 bg-charcoal text-off-white font-display font-bold uppercase tracking-wider text-[10px] px-2 py-0.5 border border-off-white shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] z-10 animate-pulse">
                        Tidak Ready
                      </div>
                    )}
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <h3 className="font-display font-bold text-lg leading-tight uppercase">{product.name}</h3>
                      {product.category === 'makanan' ? <Cookie size={16} className="text-hot-orange flex-shrink-0 mt-1" /> : <Coffee size={16} className="text-acid-green flex-shrink-0 mt-1" />}
                    </div>
                    <p className="text-xs text-charcoal/70 mb-3 flex-grow">{product.description}</p>
                    
                    <div className="flex flex-col gap-2 mt-auto">
                      <span className="font-bold text-hot-orange">{formatCurrency(product.price)}</span>
                      
                      <button
                        disabled={!isProductReady}
                        onClick={() => addItem(product)}
                        className={`w-full font-bold py-2 border-2 uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-colors ${
                          isProductReady
                            ? 'bg-charcoal text-acid-green border-charcoal active:bg-charcoal/90 cursor-pointer'
                            : 'bg-charcoal/20 text-charcoal/40 border-charcoal/10 cursor-not-allowed'
                        }`}
                      >
                        {isProductReady ? <Plus size={16} /> : null}
                        {isProductReady ? 'Tambah' : 'Tidak Ready'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      {/* Info Section */}
      <section className="max-w-md mx-auto p-6 mt-8 bg-charcoal border-t-2 border-dashed border-off-white/20">
        <h2 className="font-display font-bold text-2xl text-acid-green mb-4">INFO OUTLET</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-hot-orange p-2 neo-brutalism-orange inline-block">
              <MapPin className="text-off-white" size={24} />
            </div>
            <div>
              <p className="font-bold">Karangwuni, Kec. Sedong, Kab. Cirebon</p>
              <p className="text-sm opacity-80">Buka Senin-Minggu (07:00 - 17:00)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-off-white text-charcoal p-2 neo-brutalism inline-block">
              <span className="font-bold text-xl">@</span>
            </div>
            <div>
              <p className="font-bold">@jajanin_terus</p>
              <p className="text-sm opacity-80">Tag kita pas lagi jajan!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-hot-orange p-2 neo-brutalism-orange inline-block">
              <Phone className="text-off-white" size={24} />
            </div>
            <div>
              <p className="font-bold">085603840608</p>
              <p className="text-sm opacity-80">WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      <AnimatePresence>
        {getTotalItems() > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 z-50 pointer-events-none"
          >
            <div className="max-w-md mx-auto bg-hot-orange neo-brutalism flex flex-col p-4 pointer-events-auto">
              
              <div className="flex justify-between items-center mb-3 text-off-white">
                <div className="flex items-center gap-2">
                  <ShoppingBag />
                  <span className="font-bold">{getTotalItems()} Item</span>
                </div>
                <span className="font-display font-bold text-xl">{formatCurrency(getTotalPrice())}</span>
              </div>
              
              <div className="max-h-32 overflow-y-auto mb-4 border-y border-off-white/20 py-2 scrollbar-hide space-y-2">
                {items.map(item => {
                  const originalProduct = products.find(p => p.id === item.id);
                  const isItemReady = originalProduct ? originalProduct.isReady !== false : true;
                  return (
                    <div key={item.id} className="flex justify-between items-center text-sm text-off-white">
                      <span className="truncate pr-2">{item.name}</span>
                      <div className="flex items-center gap-3 bg-charcoal rounded-full px-2 py-1">
                        <button onClick={() => decrementItem(item.id)} className="text-hot-orange cursor-pointer"><Minus size={14} /></button>
                        <span className="font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          disabled={!isItemReady}
                          onClick={() => addItem(item)}
                          className={`${isItemReady ? 'text-acid-green cursor-pointer' : 'text-acid-green/30 cursor-not-allowed'}`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a 
                href={generateWaLink(items, getTotalPrice())}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-acid-green text-charcoal font-display font-bold text-lg py-3 text-center neo-brutalism-green block uppercase tracking-wide"
              >
                Checkout WA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
