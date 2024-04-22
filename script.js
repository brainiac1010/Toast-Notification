
        let toastBox = document.getElementById('toastBox');

        let successMsg = '<i class="fas fa-solid fa-square-check"></i> successfully submitted';
        let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i>can you fix the error !!!';
        let invalidMsg = '<i class="fa-solid fa-circle-xmark"></i> invalid input can you check again';

        function showToast(msg) {
            let toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML = msg;
            toastBox.appendChild(toast);
            if (msg.includes('error')) {
                toast.classList.add('error');
            }
            if (msg.includes('invalid')) {
                toast.classList.add('invalid');
            }
            setTimeout(() => {
                toast.remove();
            }, 6000);
        }
    