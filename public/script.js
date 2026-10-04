const products = [
  // Original FIARA products — updated prices supplied by the owner
  {id:'resin-1', category:'resin', categoryLabel:'Resin Art', title:'Shubh Labh Floral Hanging', desc:'Blue floral resin hanging with gold detailing for festive décor and auspicious gifting.', price:350, image:'assets/products/01-shubh-labh.webp', badge:'Bestseller'},
  {id:'resin-2', category:'resin', categoryLabel:'Resin Art', title:'Ganesha Blessing Plaque', desc:'A devotional resin keepsake finished with rich burgundy and antique-gold accents.', price:275, image:'assets/products/02-ganesha-plaque.webp', badge:'Personalised'},
  {id:'resin-3', category:'resin', categoryLabel:'Resin Art', title:'Ganesha Diya Set', desc:'Hand-finished festive décor with a Ganesha centrepiece and gold diya cups.', price:400, image:'assets/products/03-ganesha-diya.webp', badge:'Festive'},
  {id:'resin-4', category:'resin', categoryLabel:'Resin Art', title:'Pearl Bloom Diya Set', desc:'Pearl-white resin base with gold diyas, floral details and elegant sparkle. Set of 2.', price:550, image:'assets/products/04-white-diya-set.webp', badge:'New'},
  {id:'chocolates-1', category:'chocolates', categoryLabel:'Chocolates', title:'Premium Assorted Chocolates', desc:'A refined assortment presented for gifting, celebrations and little luxuries.', price:200, image:'assets/products/07-chocolates.webp', badge:'Bestseller'},
  {id:'chocolates-2', category:'chocolates', categoryLabel:'Chocolates', title:'Dry Fruit Chocolate Box', desc:'Rich chocolate and dry-fruit textures arranged in a gift-ready presentation.', price:450, image:'assets/products/08-dryfruit-chocolates.webp', badge:'Festive'},
  {id:'hamper-1', category:'hampers', categoryLabel:'Gift Hampers', title:'Signature Celebration Hamper', desc:'A curated mix of festive treats and keepsakes, wrapped to delight from the first look.', price:750, image:'assets/products/06-hamper.webp', badge:'Bestseller'},
  {id:'hamper-2', category:'hampers', categoryLabel:'Gift Hampers', title:'Pearl & Gold Festive Hamper', desc:'An elevated festive hamper concept pairing elegant resin décor with indulgent treats.', price:175, image:'assets/products/05-rakhi-diya.webp', badge:'Curated'},

  // New products — supplied in the latest upload
  {id:'decor-1', category:'decor', categoryLabel:'Decor & Gifting', title:'Beaded Evil Eye Hanging', desc:'Blue and pearl beaded hanging with a silver-toned floral surround and tassel finish.', price:400, image:'assets/products/09-beaded-evil-eye-hanging.webp', badge:'New'},
  {id:'resin-5', category:'resin', categoryLabel:'Resin Art', title:'Custom Devotional Resin Plaque', desc:'Personalised devotional plaque with gold leaf-style detailing and a floral resin base.', price:700, image:'assets/products/10-devotional-resin-plaque.webp', badge:'Personalised'},
  {id:'bakery-1', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Ragi Chocolate Cookies', desc:'Ragi-based chocolate cookies, packed fresh. Price shown per 250g.', price:350, image:'assets/products/11-ragi-chocolate-cookies.webp', badge:'Fresh Bake'},
  {id:'bakery-2', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Naan Khatai Cookies', desc:'Classic melt-in-the-mouth naan khatai cookies. Price shown per 250g.', price:350, image:'assets/products/12-naan-khatai-cookies.webp', badge:'Fresh Bake'},
  {id:'cake-1', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Chocolate Celebration Cake', desc:'Rich chocolate celebration cake, custom decorated to order.', price:3000, image:'assets/products/13-chocolate-cake.webp', badge:'Custom'},
  {id:'cake-2', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Classic Vanilla Cake', desc:'Elegant vanilla celebration cake. Approx. 2 kg.', price:2200, image:'assets/products/14-vanilla-cake.webp', badge:'Custom'},
  {id:'cake-3', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Doraemon Theme Cake', desc:'Playful Doraemon celebration cake. Approx. 1.5 kg.', price:1600, image:'assets/products/15-doraemon-cake.webp', badge:'Theme Cake'},
  {id:'cake-4', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Premium Fruit Cake', desc:'Fresh fruit-topped celebration cake. Approx. 2 kg.', price:2500, image:'assets/products/16-fruit-cake-2kg.webp', badge:'Custom'},
  {id:'cake-5', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Animal Theme Cake', desc:'Colourful animal-themed celebration cake. Approx. 1 kg.', price:1100, image:'assets/products/17-animal-theme-cake.webp', badge:'Theme Cake'},
  {id:'cake-6', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Fresh Fruit Cake', desc:'Fruit-decorated celebration cake. Approx. 1 kg.', price:1500, image:'assets/products/18-fruit-cake-1kg.webp', badge:'Fresh Fruit'},
  {id:'cake-7', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Chocolate Flower Cake', desc:'Chocolate celebration cake with a floral finish and premium chocolate décor.', price:3500, image:'assets/products/19-chocolate-flower-cake.webp', badge:'Signature'},
  {id:'candle-1', category:'candles', categoryLabel:'Candles', title:'Candle Bouquet', desc:'Gift-ready candle bouquet. Photo coming soon — supplied price is ₹800.', price:800, image:'assets/products/24-candle-bouquet-placeholder.webp', badge:'Gift Idea'},
  {id:'cake-8', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Cricket Theme Cake', desc:'Cricket-themed celebration cake with custom topper décor. Approx. 1.5 kg.', price:1700, image:'assets/products/20-cricket-theme-cake.webp', badge:'Theme Cake'},
  {id:'cake-9', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Butterfly Celebration Cake', desc:'Pastel butterfly-themed celebration cake. Approx. 2 kg.', price:2500, image:'assets/products/21-butterfly-cake.webp', badge:'Signature'},
  {id:'cake-10', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Butterscotch Cake', desc:'Butterscotch celebration cake. Approx. 1 kg.', price:1200, image:'assets/products/22-butterscotch-cake.webp', badge:'Bestseller'},
  {id:'cake-11', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Red Velvet Cake', desc:'Classic red velvet celebration cake. Approx. 1 kg.', price:1300, image:'assets/products/23-red-velvet-cake.webp', badge:'Bestseller'},
  // Bakery, chocolate & gifting additions
  {id:'bakery-3', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Oats Almond Cookies', desc:'Golden, delicately piped oats almond cookies, baked fresh and perfect with tea. Price shown per 250g.', price:350, image:'assets/products/25-jeera-butter-cookies.webp', badge:'Fresh Bake'},
  {id:'bakery-4', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Oats Almonds', desc:'Crunchy golden oat cookies, each topped with a whole almond and packed fresh in a gift-ready tub. Price shown per 250g.', price:400, image:'assets/products/27-almond-crunch-cookies.webp', badge:'Bestseller'},
  {id:'bakery-5', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Raagi Cookies', desc:'Wholesome raagi cookies topped with sliced almonds, packed fresh in a clear tub. Price shown per 250g.', price:380, image:'assets/products/31-cocoa-dusted-cookies.webp', badge:'Fresh Bake'},
  {id:'bakery-6', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Almond Ghee Bars', desc:'Soft desi-ghee bars scattered with sliced almonds and sweetened naturally with desi khand. Price shown per 250g.', price:450, image:'assets/products/30-almond-ghee-bars.webp', badge:'New'},
  {id:'bakery-7', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Wholesome Bakes Box', desc:'A tasting box of almond ghee bars and wheat-flour cookies, made with simple ingredients: wheat flour, almonds, desi ghee, butter and desi khand.', price:750, image:'assets/products/26-wholesome-bakes-box.webp', badge:'Gift Idea'},
  {id:'bakery-8', category:'cakes', categoryLabel:'Cakes & Bakes', title:'Assorted Cookie Tubs', desc:'Three tubs of freshly baked cookies — golden butter, cocoa and nutty chip — for sharing or gifting.', price:900, image:'assets/products/32-assorted-cookie-tubs.webp', badge:'Value Pack'},
  {id:'hamper-3', category:'hampers', categoryLabel:'Gift Hampers', title:'Friendship Cookie Gift Boxes', desc:'Two boxes of homemade cookies with a friendship-quote keepsake — a sweet way to say thank you.', price:650, image:'assets/products/28-friendship-cookie-boxes.webp', badge:'Gift Idea'},
  {id:'hamper-4', category:'hampers', categoryLabel:'Gift Hampers', title:'Festive Cookie Tasting Set', desc:'Eight slim tubs of assorted cookies presented with a red gift box, made for festive gifting and sharing.', price:1200, image:'assets/products/33-festive-cookie-tasting-set.webp', badge:'Festive'},
  {id:'chocolates-3', category:'chocolates', categoryLabel:'Chocolates', title:'Gold-Brushed Truffle Platter', desc:'Hand-finished truffles with gold brushstrokes, served alongside caramel fudge squares on a marble platter.', price:850, image:'assets/products/29-gold-truffle-platter.webp', badge:'Signature'}
];

const state = {cart:[], filter:'all', query:'', checkoutConfig:{whatsappNumber:'918595949626'}};
const fmt = n => '₹' + n.toLocaleString('en-IN');
const productGrid = document.getElementById('productGrid');
const toast = document.getElementById('toast');
const cartDrawer = document.getElementById('cartDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');

function showToast(message){
  toast.textContent = message; toast.classList.add('show');
  clearTimeout(showToast.t); showToast.t=setTimeout(()=>toast.classList.remove('show'),2600);
}

function renderProducts(){
  const list = products.filter(p => state.filter==='all' || p.category===state.filter);
  productGrid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-media">
        <span class="badge">${p.badge}</span>
        <button class="wish" aria-label="Add ${p.title} to wishlist" data-wish="${p.id}">♡</button>
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="product-info">
        <span class="product-kicker">${p.categoryLabel}</span>
        <h3 class="product-title">${p.title}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-bottom"><span class="product-price">${fmt(p.price)}</span><button class="mini-btn" data-add="${p.id}">Add to Cart</button></div>
        <button class="quick-btn" data-view="${p.id}">Quick view</button>
      </div>
    </article>
  `).join('');
  productGrid.querySelectorAll('[data-add]').forEach(btn=>btn.addEventListener('click',()=>addToCart(btn.dataset.add,1)));
  productGrid.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>openProduct(btn.dataset.view)));
  productGrid.querySelectorAll('[data-wish]').forEach(btn=>btn.addEventListener('click',()=>{btn.textContent=btn.textContent==='♡'?'♥':'♡';showToast(btn.textContent==='♥'?'Added to wishlist':'Removed from wishlist')}));
}

function persistCart(){ localStorage.setItem('fiara-cart', JSON.stringify(state.cart)); }
function addToCart(id,qty=1){
  const p=products.find(x=>x.id===id); if(!p) return;
  const existing=state.cart.find(x=>x.id===id);
  if(existing) existing.qty=Math.min(20,existing.qty+qty); else state.cart.push({id,qty:Math.min(20,qty)});
  persistCart(); renderCart(); openCart(); showToast(`${p.title} added to your basket`);
}
function updateQty(id,delta){
  const row=state.cart.find(x=>x.id===id); if(!row)return;
  row.qty+=delta; if(row.qty<=0) state.cart=state.cart.filter(x=>x.id!==id); persistCart(); renderCart();
}
function renderCart(){
  const items=document.getElementById('cartItems');
  let total=0, count=0;
  if(!state.cart.length){items.innerHTML='<div style="padding:45px 0;text-align:center;color:#8b8178;font-size:12px">Your basket is waiting for something beautiful.</div>';}
  else {
    items.innerHTML=state.cart.map(row=>{
      const p=products.find(x=>x.id===row.id), sum=p.price*row.qty; total+=sum; count+=row.qty;
      return `<div class="cart-row"><img src="${p.image}" alt="${p.title}"/><div><h4>${p.title}</h4><p>${fmt(p.price)} · ${p.categoryLabel}</p><div class="qty"><button data-minus="${p.id}">−</button><span>${row.qty}</span><button data-plus="${p.id}">+</button></div></div><div class="row-price">${fmt(sum)}</div></div>`;
    }).join('');
    items.querySelectorAll('[data-minus]').forEach(b=>b.addEventListener('click',()=>updateQty(b.dataset.minus,-1)));
    items.querySelectorAll('[data-plus]').forEach(b=>b.addEventListener('click',()=>updateQty(b.dataset.plus,1)));
  }
  document.getElementById('subtotal').textContent=fmt(total);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('mobileCartCount').textContent=count;
}
function openCart(){cartDrawer.classList.add('open');drawerBackdrop.classList.add('open');document.body.classList.add('no-scroll');}
function closeCart(){cartDrawer.classList.remove('open');drawerBackdrop.classList.remove('open');document.body.classList.remove('no-scroll');}

document.getElementById('cartBtn').addEventListener('click',openCart);
document.getElementById('mobileCart').addEventListener('click',openCart);
document.getElementById('cartClose').addEventListener('click',closeCart);
drawerBackdrop.addEventListener('click',closeCart);
function orderOnWhatsApp(){
  if(!state.cart.length){showToast('Your basket is empty.');return;}
  const lines=[]; let subtotal=0;
  state.cart.forEach((row,i)=>{
    const p=products.find(x=>x.id===row.id); if(!p) return;
    const line=p.price*row.qty; subtotal+=line;
    lines.push(`${i+1}. ${p.title} × ${row.qty} — ${fmt(line)}`);
  });
  const message="Hi FIARA Creations, I'd like to place an order:\n\n"+lines.join("\n")+"\n\nSubtotal: "+fmt(subtotal)+"\n\nPlease confirm availability, delivery and payment details.";
  window.open(`https://wa.me/${state.checkoutConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,'_blank','noopener');
}
document.getElementById('checkoutBtn').addEventListener('click',orderOnWhatsApp);


document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); state.filter=btn.dataset.filter; renderProducts();
}));

document.querySelectorAll('[data-toast]').forEach(btn=>btn.addEventListener('click',()=>showToast(btn.dataset.toast)));

function openProduct(id){
  const p=products.find(x=>x.id===id); if(!p)return;
  document.getElementById('modalImage').src=p.image;
  document.getElementById('modalImage').alt=p.title;
  document.getElementById('modalBadge').textContent=p.badge;
  document.getElementById('modalCategory').textContent=p.categoryLabel;
  document.getElementById('modalTitle').textContent=p.title;
  document.getElementById('modalDesc').textContent=p.desc;
  document.getElementById('modalPrice').textContent=fmt(p.price);
  document.getElementById('modalQty').value=1;
  const modalWa=document.getElementById('modalWhatsApp');
  const modalWaText=`Hi FIARA Creations, I'm interested in ${p.title}. Please share the available customisation options.`;
  modalWa.href=state.checkoutConfig.whatsappNumber?`https://wa.me/${state.checkoutConfig.whatsappNumber}?text=${encodeURIComponent(modalWaText)}`:'#';
  modalWa.onclick=e=>{if(!state.checkoutConfig.whatsappNumber){e.preventDefault();showToast('WhatsApp is not configured yet.');}};
  document.getElementById('modalAdd').onclick=()=>{addToCart(id,Math.max(1,Number(document.getElementById('modalQty').value||1)));closeProduct();};
  document.getElementById('productModal').hidden=false; document.body.classList.add('no-scroll');
}
function closeProduct(){document.getElementById('productModal').hidden=true;document.body.classList.remove('no-scroll');}
document.getElementById('productClose').addEventListener('click',closeProduct);
document.getElementById('productModal').addEventListener('click',e=>{if(e.target.id==='productModal')closeProduct()});

function openSearch(){document.getElementById('searchOverlay').hidden=false;document.body.classList.add('no-scroll');setTimeout(()=>document.getElementById('searchInput').focus(),30);renderSearch('');}
function closeSearch(){document.getElementById('searchOverlay').hidden=true;document.body.classList.remove('no-scroll');}
document.getElementById('searchBtn').addEventListener('click',openSearch);
document.getElementById('mobileSearch').addEventListener('click',openSearch);
document.querySelectorAll('[data-close="searchOverlay"]').forEach(b=>b.addEventListener('click',closeSearch));
document.getElementById('searchOverlay').addEventListener('click',e=>{if(e.target.id==='searchOverlay')closeSearch()});
document.getElementById('searchInput').addEventListener('input',e=>renderSearch(e.target.value));
function renderSearch(q){
  const normalized=q.toLowerCase().trim();
  const res=products.filter(p=>!normalized || `${p.title} ${p.categoryLabel} ${p.desc}`.toLowerCase().includes(normalized)).slice(0,6);
  document.getElementById('searchResults').innerHTML=res.length?res.map(p=>`<button class="search-result" data-search-product="${p.id}"><img src="${p.image}" alt=""/><span><strong>${p.title}</strong><small>${p.categoryLabel} · ${fmt(p.price)}</small></span></button>`).join(''):'<div style="padding:18px;color:#817870;font-size:12px">No matches yet — try “resin”, “chocolate”, “cakes” or “hamper”.</div>';
  document.querySelectorAll('[data-search-product]').forEach(b=>b.addEventListener('click',()=>{closeSearch();openProduct(b.dataset.searchProduct)}));
}

document.getElementById('customGiftBtn').addEventListener('click',()=>{document.getElementById('customOverlay').hidden=false;document.body.classList.add('no-scroll')});
document.querySelectorAll('[data-close="customOverlay"]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('customOverlay').hidden=true;document.body.classList.remove('no-scroll')}));
document.getElementById('customOverlay').addEventListener('click',e=>{if(e.target.id==='customOverlay'){document.getElementById('customOverlay').hidden=true;document.body.classList.remove('no-scroll')}});
document.getElementById('customForm').addEventListener('submit',async e=>{
  e.preventDefault();const fd=new FormData(e.target);
  const payload={name:fd.get('name'),occasion:fd.get('occasion'),product:fd.get('product'),notes:fd.get('notes')||''};
  try{await fetch('/api/leads/custom',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});}catch(_){}
  const message=`Hi FIARA Creations, I'd like a personalised gift.\nName: ${payload.name}\nOccasion: ${payload.occasion}\nProduct: ${payload.product}\nNotes: ${payload.notes}`;
  if(state.checkoutConfig.whatsappNumber){window.open(`https://wa.me/${state.checkoutConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,'_blank');}
  else{showToast('Your request was saved. WhatsApp is not configured yet.');}
});


function applyWhatsAppLinks(){
  document.querySelectorAll('[data-whatsapp-link]').forEach(link=>{
    const text=link.dataset.whatsappText||'Hi FIARA Creations, I’d like to enquire about your gifting collection.';
    if(state.checkoutConfig.whatsappNumber){
      link.href=`https://wa.me/${state.checkoutConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
      link.target='_blank';
    }else{
      link.href='#';
      link.target='';
      link.onclick=e=>{e.preventDefault();showToast('WhatsApp is not configured yet.');};
    }
  });
}

async function loadStoreConfig(){
  try{
    const response=await fetch('/api/config');
    if(!response.ok) throw new Error();
    const cfg=await response.json();state.checkoutConfig={...state.checkoutConfig,...cfg,whatsappNumber:cfg.whatsappNumber||state.checkoutConfig.whatsappNumber};
    applyWhatsAppLinks();
  }catch(_){
    applyWhatsAppLinks();
  }
}

document.getElementById('wishlistBtn').addEventListener('click',()=>showToast('Wishlist is ready for your favourites.'));

document.getElementById('mobileWish').addEventListener('click',()=>showToast('Wishlist is ready for your favourites.'));
document.getElementById('menuBtn').addEventListener('click',()=>showToast('On mobile, use the bottom navigation to explore the collection.'));

try{const saved=JSON.parse(localStorage.getItem('fiara-cart')||'[]'); if(Array.isArray(saved)) state.cart=saved.filter(x=>products.some(p=>p.id===x.id)&&Number.isInteger(x.qty)&&x.qty>0&&x.qty<=20);}catch(_){}
renderProducts(); renderCart(); loadStoreConfig();
