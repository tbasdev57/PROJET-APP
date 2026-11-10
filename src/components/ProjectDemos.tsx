import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowLeft, Check, Minus, Plus, Search, ShoppingCart, Trash2 } from 'lucide-react';

const panel = 'rounded-2xl border border-line/10 bg-surface p-4 sm:p-5';
const field = 'w-full rounded-xl border border-line/20 bg-surface-alt px-3 py-2 text-ink outline-none focus:border-accent';
const primary = 'rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-opacity hover:opacity-85';
const secondary = 'rounded-xl border border-line/20 px-3 py-2 text-sm font-medium text-ink hover:border-accent/50';

function DemoNotice() {
  return <p className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-xs leading-relaxed text-ink-soft"><strong className="text-accent">Démonstration interactive.</strong> Application de présentation créée pour ce portfolio ; produits, montants, clients et contenus sont fictifs. Aucun paiement ni réservation réelle.</p>;
}

const products = [
  { id: 1, name: 'Casque sans fil', category: 'Audio', price: 89, icon: '🎧' },
  { id: 2, name: 'Montre connectée', category: 'Accessoires', price: 129, icon: '⌚' },
  { id: 3, name: 'Clavier compact', category: 'Bureau', price: 74, icon: '⌨️' },
  { id: 4, name: 'Enceinte portable', category: 'Audio', price: 59, icon: '🔊' },
  { id: 5, name: 'Souris ergonomique', category: 'Bureau', price: 45, icon: '🖱️' },
  { id: 6, name: 'Sac ordinateur', category: 'Accessoires', price: 65, icon: '🎒' },
];
const euros = (n: number) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

function EcommerceDemo() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tous');
  const [cart, setCart] = useState<Record<number, number>>({});
  const [order, setOrder] = useState(false);
  const shown = products.filter(p => (category === 'Tous' || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase()));
  const count = Object.values(cart).reduce((a,b) => a + b, 0);
  const total = products.reduce((sum,p) => sum + p.price * (cart[p.id] ?? 0),0);
  const adjust = (id: number, amount: number) => { setCart(prev => ({...prev,[id]: Math.max(0,(prev[id] ?? 0) + amount)})); setOrder(false); };
  return <div className="space-y-5">
    <DemoNotice />
    <div className="flex flex-col gap-3 sm:flex-row"><label className="relative flex-1"><Search className="absolute left-3 top-3 h-4 w-4 text-ink-faint"/><input className={field + ' pl-9'} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Rechercher un produit" aria-label="Rechercher un produit"/></label><select className={field + ' sm:w-48'} value={category} onChange={e=>setCategory(e.target.value)} aria-label="Catégorie"><option>Tous</option><option>Audio</option><option>Bureau</option><option>Accessoires</option></select></div>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{shown.map(p=><div key={p.id} className={panel + ' flex flex-col'}><div className="mb-2 flex h-20 items-center justify-center rounded-xl bg-accent/10 text-4xl" aria-hidden="true">{p.icon}</div><span className="text-xs text-ink-faint">{p.category}</span><strong className="mt-1 text-ink">{p.name}</strong><div className="mt-auto flex items-center justify-between pt-3"><span className="font-bold text-accent">{euros(p.price)}</span><button className={primary} onClick={()=>adjust(p.id,1)}>Ajouter</button></div></div>)}</div>
    {shown.length===0 && <p className="text-ink-soft">Aucun produit trouvé.</p>}
    <div className={panel}><h4 className="mb-3 flex items-center gap-2 font-semibold text-ink"><ShoppingCart className="h-5 w-5"/>Panier ({count})</h4>{products.filter(p=>cart[p.id]>0).map(p=><div key={p.id} className="flex flex-wrap items-center justify-between gap-3 border-t border-line/10 py-2 text-sm text-ink"><span>{p.name}</span><div className="flex items-center gap-3"><button className={secondary} onClick={()=>adjust(p.id,-1)} aria-label={'Diminuer '+p.name}><Minus className="h-3 w-3"/></button>{cart[p.id]}<button className={secondary} onClick={()=>adjust(p.id,1)} aria-label={'Augmenter '+p.name}><Plus className="h-3 w-3"/></button><strong>{euros(cart[p.id]*p.price)}</strong></div></div>)}{count===0&&<p className="text-sm text-ink-soft">Ajoutez un article pour commencer.</p>}<div className="mt-3 flex items-center justify-between border-t border-line/10 pt-3"><strong className="text-ink">Total : {euros(total)}</strong><button disabled={!count} className={primary+' disabled:opacity-40'} onClick={()=>setOrder(true)}>Simuler la commande</button></div>{order&&<p role="status" className="mt-3 text-sm text-accent">Commande de démonstration validée. Aucun paiement effectué.</p>}</div>
  </div>;
}

const transactions = [
  { name:'Salaire démo',category:'Revenus',amount:2400,date:'2026-11-02' },
  { name:'Courses démo',category:'Courses',amount:-138,date:'2026-11-03' },
  { name:'Loyer démo',category:'Logement',amount:-790,date:'2026-11-04' },
  { name:'Transport démo',category:'Transport',amount:-55,date:'2026-11-05' },
  { name:'Mission démo',category:'Revenus',amount:480,date:'2026-11-06' },
  { name:'Courses démo',category:'Courses',amount:-92,date:'2026-11-08' },
];
function DashboardDemo() {
  const [filter,setFilter]=useState('Toutes');
  const [range,setRange]=useState('Mois');
  const filtered=transactions.filter(t=>filter==='Toutes'||t.category===filter);
  const income=filtered.filter(t=>t.amount>0).reduce((s,t)=>s+t.amount,0);
  const expense=-filtered.filter(t=>t.amount<0).reduce((s,t)=>s+t.amount,0);
  const categories=['Courses','Logement','Transport'];
  return <div className="space-y-5"><DemoNotice/><div className="flex flex-wrap gap-3"><select className={field+' sm:w-52'} value={filter} onChange={e=>setFilter(e.target.value)} aria-label="Filtrer les transactions">{['Toutes','Revenus',...categories].map(x=><option key={x}>{x}</option>)}</select><div className="flex gap-2">{['Semaine','Mois','Année'].map(x=><button key={x} className={x===range?primary:secondary} onClick={()=>setRange(x)}>{x}</button>)}</div></div><p className="text-xs text-ink-faint">Période affichée : {range} (jeu de données d'exemple fixe)</p><div className="grid gap-3 sm:grid-cols-3">{[['Entrées',income],['Sorties',expense],['Solde',income-expense]].map(([label,value])=><div key={String(label)} className={panel}><p className="text-sm text-ink-soft">{label}</p><strong className="mt-2 block text-2xl text-ink">{euros(Number(value))}</strong></div>)}</div><div className={panel}><h4 className="mb-4 font-semibold text-ink">Répartition des dépenses</h4><div className="space-y-3">{categories.map(cat=>{const val=-filtered.filter(t=>t.category===cat).reduce((s,t)=>s+t.amount,0);return <div key={cat}><div className="mb-1 flex justify-between text-sm text-ink-soft"><span>{cat}</span><span>{euros(val)}</span></div><div className="h-3 overflow-hidden rounded-full bg-accent/10"><div className="h-full rounded-full bg-accent transition-all" style={{width:expense?((val/expense)*100)+'%':'0%'}} /></div></div>})}</div></div><div className={panel}><h4 className="mb-3 font-semibold text-ink">Transactions</h4>{filtered.length===0?<p className="text-ink-soft">Aucune transaction.</p>:filtered.map((t,i)=><div key={i} className="flex items-center justify-between gap-3 border-t border-line/10 py-3 text-sm"><div><p className="font-medium text-ink">{t.name}</p><p className="text-ink-faint">{t.category} · {t.date}</p></div><strong className={t.amount>=0?'text-accent':'text-ink'}>{euros(t.amount)}</strong></div>)}</div></div>;
}

const workouts=[
  {name:'Renforcement complet',duration:'25 min',exercises:['Squats · 3×12','Pompes · 3×8','Gainage · 3×30 s']},
  {name:'Mobilité & récupération',duration:'15 min',exercises:['Étirements · 5 min','Mobilité hanches · 5 min','Respiration · 5 min']},
  {name:'Cardio doux',duration:'20 min',exercises:['Marche dynamique · 10 min','Montées de genoux · 5 min','Retour au calme · 5 min']},
];
function FitnessDemo() {
  const [selected,setSelected]=useState(0);
  const [done,setDone]=useState<number[]>([]);
  return <div className="space-y-5"><DemoNotice/><div className="grid gap-3 md:grid-cols-3">{workouts.map((w,i)=><button key={w.name} onClick={()=>setSelected(i)} className={panel+' text-left '+(i===selected?'border-accent':'')}><div className="mb-3 text-3xl" aria-hidden="true">{['🏋️','🧘','🚶'][i]}</div><strong className="block text-ink">{w.name}</strong><span className="text-sm text-ink-soft">{w.duration}</span>{done.includes(i)&&<p className="mt-2 text-sm text-accent">✓ Séance terminée</p>}</button>)}</div><div className={panel}><h4 className="mb-3 text-lg font-semibold text-ink">{workouts[selected].name}</h4><ul className="mb-4 space-y-2">{workouts[selected].exercises.map(ex=><li key={ex} className="rounded-lg bg-accent/10 p-3 text-sm text-ink">{ex}</li>)}</ul><button className={primary} onClick={()=>setDone(prev=>prev.includes(selected)?prev.filter(x=>x!==selected):[...prev,selected])}>{done.includes(selected)?'Annuler la validation':'Terminer la séance'}</button></div><div className={panel}><p className="font-semibold text-ink">Progression des séances de démonstration : {done.length}/{workouts.length}</p><div className="mt-3 h-3 overflow-hidden rounded-full bg-accent/10"><div className="h-full bg-accent transition-all" style={{width:(done.length/workouts.length*100)+'%'}}/></div></div></div>;
}

const meals=[
  {name:'Salade fraîche',cat:'Entrées',price:8,icon:'🥗'},
  {name:'Velouté du jour',cat:'Entrées',price:7,icon:'🥣'},
  {name:'Burger maison',cat:'Plats',price:16,icon:'🍔'},
  {name:'Pâtes végétariennes',cat:'Plats',price:14,icon:'🍝'},
  {name:'Tarte aux fruits',cat:'Desserts',price:7,icon:'🥧'},
  {name:'Fondant au chocolat',cat:'Desserts',price:8,icon:'🍫'},
];
function RestaurantDemo() {
  const [category,setCategory]=useState('Tout');
  const [items,setItems]=useState<Record<string,number>>({});
  const [confirmation,setConfirmation]=useState(false);
  const total=meals.reduce((s,m)=>s+(items[m.name]??0)*m.price,0);
  return <div className="space-y-5"><DemoNotice/><div className={panel+' text-center'}><p className="text-xs uppercase tracking-[0.2em] text-accent">Restaurant fictif</p><h4 className="mt-2 text-2xl font-bold text-ink">La Table Démo</h4><p className="text-sm text-ink-soft">Une carte imaginaire à découvrir et à explorer.</p></div><div className="flex flex-wrap gap-2">{['Tout','Entrées','Plats','Desserts'].map(c=><button key={c} className={c===category?primary:secondary} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="grid gap-3 sm:grid-cols-2">{meals.filter(m=>category==='Tout'||m.cat===category).map(m=><div key={m.name} className={panel+' flex items-center gap-3'}><span className="text-3xl" aria-hidden="true">{m.icon}</span><div className="min-w-0 flex-1"><p className="font-semibold text-ink">{m.name}</p><p className="text-sm text-ink-soft">{euros(m.price)}</p></div><button className={primary} onClick={()=>{setItems(p=>({...p,[m.name]:(p[m.name]??0)+1}));setConfirmation(false);}}>Ajouter</button></div>)}</div><div className={panel}><h4 className="mb-3 font-semibold text-ink">Sélection de plats</h4>{meals.filter(m=>items[m.name]>0).map(m=><div key={m.name} className="flex justify-between gap-3 border-t border-line/10 py-2 text-sm text-ink"><span>{m.name} × {items[m.name]}</span><button className="text-accent" onClick={()=>setItems(p=>({...p,[m.name]:Math.max(0,(p[m.name]??0)-1)}))}>Retirer un</button></div>)}{total===0&&<p className="text-sm text-ink-soft">Choisissez vos plats.</p>}<div className="mt-3 flex items-center justify-between gap-2"><strong className="text-ink">Total : {euros(total)}</strong><button disabled={total===0} className={primary+' disabled:opacity-40'} onClick={()=>setConfirmation(true)}>Simuler une commande</button></div>{confirmation&&<p role="status" className="mt-3 text-sm text-accent">Commande fictive enregistrée dans la démo uniquement.</p>}</div></div>;
}

const posts=[
 {id:1,title:'Concevoir une interface accessible',cat:'Design',date:'12 juin 2026',body:'Une interface accessible commence par une structure HTML sémantique, des contrastes lisibles et une navigation au clavier. Les composants doivent fournir un retour visuel clair et permettre à chacun de comprendre les actions disponibles.'},
 {id:2,title:'Pourquoi utiliser des composants React ?',cat:'Développement',date:'18 juin 2026',body:'Les composants permettent de découper une interface en éléments réutilisables. Une organisation cohérente facilite les modifications, les tests et le travail en équipe. Le plus important reste la clarté de chaque responsabilité.'},
 {id:3,title:'Améliorer la performance d’un site',cat:'Développement',date:'24 juin 2026',body:'Optimiser les images, limiter les chargements inutiles et surveiller le poids du JavaScript sont des gestes simples. La mesure des performances sur de vrais appareils aide à identifier les priorités.'},
 {id:4,title:'Créer une expérience mobile agréable',cat:'Design',date:'2 juillet 2026',body:'Les interfaces mobiles gagnent à proposer de grandes zones tactiles, des formulaires courts et un contenu hiérarchisé. Une bonne conception responsive n’est pas seulement une question de largeur.'},
];
function BlogDemo() {
 const [search,setSearch]=useState(''); const [cat,setCat]=useState('Tous');const [selected,setSelected]=useState<number|null>(null);
 const filtered=posts.filter(p=>(cat==='Tous'||p.cat===cat)&&p.title.toLowerCase().includes(search.toLowerCase()));
 const article=posts.find(p=>p.id===selected);
 return <div className="space-y-5"><DemoNotice/>{article?<div className={panel}><button className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-accent" onClick={()=>setSelected(null)}><ArrowLeft className="h-4 w-4"/>Tous les articles</button><p className="text-sm text-ink-faint">{article.cat} · {article.date}</p><h4 className="my-4 text-2xl font-bold text-ink">{article.title}</h4><p className="leading-8 text-ink-soft">{article.body}</p></div>:<><div className="flex flex-col gap-3 sm:flex-row"><input className={field} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Rechercher un article" aria-label="Rechercher un article"/><select className={field+' sm:w-48'} value={cat} onChange={e=>setCat(e.target.value)} aria-label="Catégorie d'article"><option>Tous</option><option>Design</option><option>Développement</option></select></div><div className="grid gap-3 sm:grid-cols-2">{filtered.map(p=><button key={p.id} className={panel+' text-left transition-colors hover:border-accent/40'} onClick={()=>setSelected(p.id)}><p className="text-xs font-semibold text-accent">{p.cat} · {p.date}</p><h4 className="my-3 text-lg font-bold text-ink">{p.title}</h4><p className="line-clamp-2 text-sm text-ink-soft">{p.body}</p><p className="mt-4 text-sm font-semibold text-accent">Lire l'article →</p></button>)}</div>{!filtered.length&&<p className="text-ink-soft">Aucun article trouvé.</p>}</>}</div>;
}
type Task = {id:number;label:string;done:boolean;priority:'Normale'|'Haute'};
function TasksDemo() {
 const [tasks,setTasks]=useState<Task[]>([{id:1,label:'Découvrir les démos du portfolio',done:false,priority:'Normale'},{id:2,label:'Tester la navigation mobile',done:true,priority:'Haute'}]);
 const [input,setInput]=useState('');const [priority,setPriority]=useState<'Normale'|'Haute'>('Normale');const [filter,setFilter]=useState('Toutes');
 const [editing,setEditing]=useState<number|null>(null);const [editText,setEditText]=useState('');
 const visible=useMemo(()=>tasks.filter(t=>filter==='Toutes'||(filter==='Terminées'?t.done:!t.done)),[tasks,filter]);
 function add(e:FormEvent<HTMLFormElement>){e.preventDefault();const value=input.trim();if(!value)return;setTasks(prev=>[...prev,{id:Date.now(),label:value,done:false,priority}]);setInput('');}
 return <div className="space-y-5"><DemoNotice/><form onSubmit={add} className="flex flex-col gap-3 sm:flex-row"><input className={field} value={input} onChange={e=>setInput(e.target.value)} placeholder="Nouvelle tâche" aria-label="Nouvelle tâche" maxLength={100}/><select className={field+' sm:w-36'} value={priority} onChange={e=>setPriority(e.target.value as 'Normale'|'Haute')} aria-label="Priorité"><option>Normale</option><option>Haute</option></select><button className={primary} type="submit">Ajouter</button></form><div className="flex flex-wrap gap-2">{['Toutes','À faire','Terminées'].map(f=><button key={f} className={filter===f?primary:secondary} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className={panel}><h4 className="mb-4 font-semibold text-ink">{tasks.filter(t=>t.done).length}/{tasks.length} tâches terminées</h4><div className="space-y-2">{visible.map(t=><div key={t.id} className="flex flex-wrap items-center gap-2 rounded-xl border border-line/10 p-3"><button aria-label={t.done?'Marquer non terminée':'Marquer terminée'} onClick={()=>setTasks(p=>p.map(x=>x.id===t.id?{...x,done:!x.done}:x))} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/40 text-accent">{t.done&&<Check className="h-4 w-4"/>}</button>{editing===t.id?<input autoFocus className={field+' min-w-0 flex-1'} value={editText} onChange={e=>setEditText(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'){setTasks(p=>p.map(x=>x.id===t.id?{...x,label:editText.trim()||x.label}:x));setEditing(null);}}} />:<span className={'min-w-0 flex-1 break-words text-sm '+(t.done?'text-ink-faint line-through':'text-ink')}>{t.label}</span>}<span className="text-xs text-accent">{t.priority}</span>{editing===t.id?<button className={secondary} onClick={()=>{setTasks(p=>p.map(x=>x.id===t.id?{...x,label:editText.trim()||x.label}:x));setEditing(null);}}>OK</button>:<button className={secondary} onClick={()=>{setEditing(t.id);setEditText(t.label);}}>Modifier</button>}<button aria-label={'Supprimer '+t.label} className={secondary} onClick={()=>setTasks(p=>p.filter(x=>x.id!==t.id))}><Trash2 className="h-4 w-4"/></button></div>)}{!visible.length&&<p className="text-sm text-ink-soft">Aucune tâche dans ce filtre.</p>}</div></div></div>;
}
export function ProjectDemo({ index }: { index: number }) {
 switch(index){
  case 0:return <EcommerceDemo/>;
  case 1:return <DashboardDemo/>;
  case 2:return <FitnessDemo/>;
  case 3:return <RestaurantDemo/>;
  case 4:return <BlogDemo/>;
  case 5:return <TasksDemo/>;
  default:return <DemoNotice/>;
 }
}
