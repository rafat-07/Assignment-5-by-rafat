document.getElementById('btn-noa-donation')
    .addEventListener('click', function () {
        const balanceNumber = getTextFieldValue('balance');
        const inputMoney1 = getInputValue('input-1');
        if (isNaN(inputMoney1) || inputMoney1 <= 0) {
            alert('Invalid Donation Amount');
            document.getElementById('input-1').value = '';
            return;
        }
        if (inputMoney1 > balanceNumber) {
            alert('Not Enough Balance To Donate');
            document.getElementById('input-1').value = '';
            return;
        }
        else {
            const balanceNoaNumber = getTextFieldValue('taka-1');
            const newBalance1 = balanceNoaNumber + inputMoney1;
            const mainBalance = balanceNumber - inputMoney1;
            document.getElementById('balance').innerText = mainBalance;
            document.getElementById('taka-1').innerText = newBalance1;
            document.getElementById('input-1').value = '';
            document.getElementById('my_modal_5').showModal();
            const time = new Date();
            const div = document.createElement('div');
            div.classList.add('border-2', 'my-2', 'rounded-md', 'w-4/5', 'mx-auto');
            div.innerHTML = `
                        <h4 class="text-2xl font-bold"> ${inputMoney1} Tk. is Donated for Flood Relief in Noakhali</h4>
                        <p class="bg-slate-200">Date: ${time}</p>
                    `
            document.getElementById('history-container').appendChild(div);
        }
    })