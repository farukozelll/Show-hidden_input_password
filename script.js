const conInput = document.querySelector('.con-input')
    const conText = document.querySelector('.con-input__text')
    const conPassword = document.querySelector('.con-input__password')
    const inputText = document.querySelector('input.text')
    const inputPassword = document.querySelector('input.password')
    const iconHide = document.querySelector('i.hide')
    const iconShow = document.querySelector('i.show')
    const effect = document.querySelector('.effect')
    let hidden = true 
    function handleInputText (evt) {
        inputPassword.value = evt.target.value
    }
    function handleInputPassword (evt) {
        inputText.value = evt.target.value
    }
    function handleClickHidden() {
        effect.style.transition = 'all .4s ease'
        effect.classList.add('active')
        conPassword.classList.add('hideEffect')
        conText.classList.add('hideEffect')
        conInput.classList.add('click')
        setTimeout(() => {
            effect.style.transition = 'all .25s ease'
            effect.classList.add('remove')
            conText.style.display = !hidden ? 'block' : 'none'
            conPassword.style.display = hidden ? 'block' : 'none'
            iconHide.style.display = hidden ? 'block' : 'none'
            iconShow.style.display = !hidden ? 'block' : 'none'
            if (hidden) {
                inputPassword.focus()
            } else {
                inputText.focus()
            }
            setTimeout(() => {
                effect.classList.remove('active')
                effect.classList.remove('remove')
                effect.style.transition = ''
            }, 250);
            conPassword.classList.remove('hideEffect')
            conText.classList.remove('hideEffect')
            conInput.classList.remove('click')
        }, 250);
        hidden = !hidden
    }