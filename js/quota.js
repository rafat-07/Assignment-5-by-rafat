document.getElementById('btn-quota-donation')
    .addEventListener('click', function () {
        const balanceNumber = getTextFieldValue('balance');
        const inputMoney3 = getInputValue('input-3');
        if (isNaN(inputMoney3) || inputMoney3 <= 0) {
            alert('Invalid Donation Amount');
            document.getElementById('input-3').value = '';
            return;
        }
        if (inputMoney3 > balanceNumber) {
            alert('Not Enough Balance To Donate');
            document.getElementById('input-3').value = '';
            return;
        }
        else {
            const balanceQuotaNumber = getTextFieldValue('taka-3');
            const newBalance3 = balanceQuotaNumber + inputMoney3;
            const mainBalance = balanceNumber - inputMoney3;
            document.getElementById('balance').innerText = mainBalance;
            document.getElementById('taka-3').innerText = newBalance3;
            document.getElementById('input-3').value = '';
            document.getElementById('my_modal_5').showModal();
            const time = new Date();
            const div = document.createElement('div');
            div.classList.add('border-2', 'my-2', 'rounded-md', 'w-4/5', 'mx-auto');
            div.innerHTML = `
                        <h4 class="text-2xl font-bold"> ${inputMoney3} Tk. is Donated for Injured in the Quota Movement</h4>
                        <p class="bg-slate-200">Date: ${time}</p>
                    `
            document.getElementById('history-container').appendChild(div);
        }
    })