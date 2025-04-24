let selectedTeam = '';
let selectedOdd = '';

function placeBet(team, odd) {
  selectedTeam = team;
  selectedOdd = odd;
  document.getElementById('selectedTeam').innerText = team;
  document.getElementById('selectedOdd').innerText = odd;
}

function submitBet(event) {
  event.preventDefault();
  const name = document.getElementById('playerName').value;
  const amount = document.getElementById('amount').value;

  if (!selectedTeam || !selectedOdd) {
    alert('Vui lòng chọn trận và tỷ lệ cược trước khi đặt.');
    return;
  }

  const history = document.getElementById('historyList');
  const result = document.createElement('li');
  result.textContent = `${name} đã cược ${amount}₫ cho ${selectedTeam} với tỷ lệ ${selectedOdd}`;
  history.appendChild(result);

  // Reset form
  document.getElementById('playerName').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('selectedTeam').innerText = 'Chưa chọn';
  document.getElementById('selectedOdd').innerText = '--';
  selectedTeam = '';
  selectedOdd = '';
}
