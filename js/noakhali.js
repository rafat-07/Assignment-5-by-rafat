document.getElementById('btn-noa-donation')
            .addEventListener('click', function () {
                const balanceText = document.getElementById('balance').innerText;
                const balanceNumber = parseFloat(balanceText);
                const inputMoney1 = getInputValue('input-1')

                if (isNaN(inputMoney1)) {
                    alert('Failed to donate');
                    return;
                }
                if (inputMoney1 > balanceNumber) {
                    alert('Not Enough Balance To Donate');
                    return;
                }
                else {
                    const balanceNoa = document.getElementById('taka-1').innerText;
                    const balanceNoaNumber = parseFloat(balanceNoa);
                    const newBalance1 = balanceNoaNumber + inputMoney1;
                    const mainBalance = balanceNumber - inputMoney1;
                    document.getElementById('balance').innerText = mainBalance;
                    document.getElementById('taka-1').innerText = newBalance1;
                    document.getElementById('my_modal_5').showModal();
                    const time = new Date();
                    const p = document.createElement('p');
                    const p1 = document.createElement('p');
                    p.innerText = `${inputMoney1} Tk. Donated`;
                    p1.innerText = `${time}`;
                    document.getElementById('history-container').appendChild(p);
                    document.getElementById('history-container').appendChild(p1);
                }            
            })