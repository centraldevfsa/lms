function toggleDropdown(element){const content=element.nextElementSibling;const arrow=element.querySelector('span.text-2xl');if(content.classList.contains('hidden')){content.classList.remove('hidden');arrow.style.transform='rotate(180deg)';}else{content.classList.add('hidden');arrow.style.transform='rotate(0deg)';}}
function openModal(){document.getElementById('videoModal').classList.remove('hidden');document.getElementById('videoFrame').src="https://www.youtube.com/embed/BJiOBnm2DaE?autoplay=1";}
function closeModal(){document.getElementById('videoModal').classList.add('hidden');document.getElementById('videoFrame').src="";}
function openDepo1Modal(){document.getElementById('depo1Modal').classList.remove('hidden');document.getElementById('depo1Frame').src="https://www.youtube.com/embed/Du68_r7qTOg?autoplay=1";}
function closeDepo1Modal(){document.getElementById('depo1Modal').classList.add('hidden');document.getElementById('depo1Frame').src="";}
function openDepo2Modal(){document.getElementById('depo2Modal').classList.remove('hidden');document.getElementById('depo2Frame').src="https://www.youtube.com/embed/aLurxHPwKgY?autoplay=1";}
function closeDepo2Modal(){document.getElementById('depo2Modal').classList.add('hidden');document.getElementById('depo2Frame').src="";}
function openDepo3Modal(){document.getElementById('depo3Modal').classList.remove('hidden');document.getElementById('depo3Frame').src="https://www.youtube.com/embed/WXVQuXq80Cw?autoplay=1";}
function closeDepo3Modal(){document.getElementById('depo3Modal').classList.add('hidden');document.getElementById('depo3Frame').src="";}
function openDepo4Modal(){document.getElementById('depo4Modal').classList.remove('hidden');document.getElementById('depo4Frame').src="https://www.youtube.com/embed/iCfbBO3W2Qg?autoplay=1";}
function closeDepo4Modal(){document.getElementById('depo4Modal').classList.add('hidden');document.getElementById('depo4Frame').src="";}
function openDepo5Modal(){document.getElementById('depo5Modal').classList.remove('hidden');document.getElementById('depo5Frame').src="https://www.youtube.com/embed/UoceAIi-iJo?autoplay=1";}
function closeDepo5Modal(){document.getElementById('depo5Modal').classList.add('hidden');document.getElementById('depo5Frame').src="";}
function changeImage(image){const imageContainer=document.getElementById('imageContainer');imageContainer.style.opacity=0;setTimeout(()=>{imageContainer.style.backgroundImage=`url('assets/img/${image}')`;imageContainer.style.opacity=1;},500);}