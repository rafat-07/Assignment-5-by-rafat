document.getElementById('btn-feni-donation')
            .addEventListener('click', function () {
                // const balanceText = document.getElementById('balance').innerText;
                const balanceNumber = getTextFieldValue('balance');
                const inputMoney2 = getInputValue('input-2')

                if (isNaN(inputMoney2)) {
                    alert('Failed to donate');
                    document.getElementById('input-2').value = '';
                    return;
                }
                if (inputMoney2 > balanceNumber) {
                    alert('Not Enough Balance To Donate');
                    document.getElementById('input-2').value = '';

                    return;
                }
                else {
                    // const balanceFeni = document.getElementById('taka-2').innerText;
                    const balanceFeniNumber = getTextFieldValue('taka-2');
                    const newBalance2 = balanceFeniNumber + inputMoney2;
                    const mainBalance = balanceNumber - inputMoney2;
                    document.getElementById('balance').innerText = mainBalance;
                    document.getElementById('taka-2').innerText = newBalance2;
                    document.getElementById('input-2').value = '';
                    document.getElementById('my_modal_5').showModal();
                    const time = new Date();
                    const p = document.createElement('p');
                    const p1 = document.createElement('p');
                    p.innerText = `${inputMoney2} Tk. is Donated for Flood Relief in Feni`;
                    p1.innerText = `${time}`;
                    document.getElementById('history-container').appendChild(p);
                    document.getElementById('history-container').appendChild(p1);
                }            
            })