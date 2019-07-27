const test = () => {
    let icons = document.createElement('div');
        icons.id = 'icons';
        let menu = document.createElement('a');
        menu.id = 'icon-left';
        icons.appendChild(menu);

        return icons
    }

    export {
        test
    }