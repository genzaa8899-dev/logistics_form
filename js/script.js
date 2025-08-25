const form = document.getElementById('logisticsForm');
const inputs = form.querySelectorAll('input');
const progressBar = document.getElementById('progressBar');

function updateProgress() {
  let filled = 0;
  inputs.forEach(input => { if (input.value.trim() !== '') filled++; });
  const percent = Math.round((filled / inputs.length) * 100);
  progressBar.style.width = percent + '%';

  // Highlight sections
  const sectionPersonal = document.getElementById('sectionPersonal');
  const sectionAddress = document.getElementById('sectionAddress');
  const sectionContact = document.getElementById('sectionContact');

  const personalFilled = document.getElementById('firstName').value && document.getElementById('lastName').value;
  const addressFilled = document.getElementById('address').value && document.getElementById('subDistrict').value &&
                        document.getElementById('district').value && document.getElementById('province').value &&
                        document.getElementById('country').value;
  const contactFilled = document.getElementById('wechat').value;

  sectionPersonal.style.backgroundColor = personalFilled ? '#ffe6f0' : 'transparent';
  sectionAddress.style.backgroundColor = addressFilled ? '#f3e5f5' : 'transparent';
  sectionContact.style.backgroundColor = contactFilled ? '#ffe6f0' : 'transparent';
}

inputs.forEach(input => input.addEventListener('input', updateProgress));
window.addEventListener('load', updateProgress);
