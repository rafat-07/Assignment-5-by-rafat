document.getElementById('btn-feni-donation')
    .addEventListener('click', function () {
        const balanceNumber = getTextFieldValue('balance');
        const inputMoney2 = getInputValue('input-2');
        if (isNaN(inputMoney2) || inputMoney2 <= 0) {
            alert('Invalid Donation Amount');
            document.getElementById('input-2').value = '';
            return;
        }
        if (inputMoney2 > balanceNumber) {
            alert('Not Enough Balance To Donate');
            document.getElementById('input-2').value = '';
            return;
        }
        else {
            const balanceFeniNumber = getTextFieldValue('taka-2');
            const newBalance2 = balanceFeniNumber + inputMoney2;
            const mainBalance = balanceNumber - inputMoney2;
            document.getElementById('balance').innerText = mainBalance;
            document.getElementById('taka-2').innerText = newBalance2;
            document.getElementById('input-2').value = '';
            document.getElementById('my_modal_5').showModal();
            const time = new Date();
            const div = document.createElement('div');
            div.classList.add('border-2', 'my-2', 'rounded-md', 'w-4/5', 'mx-auto');
            div.innerHTML = `
                        <h4 class="text-2xl font-bold"> ${inputMoney2} Tk. is Donated for Flood Relief in Feni</h4>
                        <p class="bg-slate-200">Date: ${time}</p>
                    `
            document.getElementById('history-container').appendChild(div);
        }
    })