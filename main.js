let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Başarıyla tamamlandı.';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Bir hata oluştu.';
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Geçersiz ifade , tekrar deneyiniz.';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('hata')){
        toast.classList.add('hata');
    }
    if(msg.includes('Geçersiz')){
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}