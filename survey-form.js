'use-strict';

class RadioGroup {
    constructor(el) {
        this._el = el;
        el.onclick = this.onClick.bind(this);
    }

    radio(e) {
        [].forEach.call(
            document.querySelectorAll('[data-action=radio]'),
            item => {
                item.classList.replace('checked', 'unchecked');
                if (item.childElementCount != 0) {
                    item.children[0].remove();
                }
            });

        let rad = e.target;
        rad.classList.replace('unchecked', 'checked');
        rad.innerHTML = `<span class="custom-radio-check" data-action="check"></span>`;
    }

    checkbox(e) {
        let box = e.target;
        box.classList.replace('unchecked', 'checked');
        box.innerHTML = `<span class="custom-checkbox-check" data-action="check">&check;</span>`;
    }

    check(e) {
        let d = e.target.closest('div');
        d.classList.replace('checked', 'unchecked');
        e.target.remove();
    }

    onClick(e) {
        let action = e.target.dataset.action;
        if (action) this[action](e);
    }
}

new RadioGroup(level);