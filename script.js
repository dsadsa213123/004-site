const toast=document.getElementById('toast');
function go(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
function pick(name){const s=document.getElementById('tariff');const i=[...s.options].findIndex(x=>x.textContent.startsWith(name));if(i>=0)s.selectedIndex=i;go('order')}
function send(e){e.preventDefault();const from=document.getElementById('from').value;const to=document.getElementById('to').value;toast.textContent=`Заявка: ${from} → ${to}. Мади уже выезжает 🚕`;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),4500);e.target.reset()}
