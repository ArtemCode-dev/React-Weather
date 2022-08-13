export function changeCssRootVariables (theme) {
    const root = document.querySelector(':root');
            
    const components = ['components-background', 'card-background', 'card-shadow', 'text-color', 'body-background'];

    components.forEach(item => {
        root.style.setProperty(
            `--${item}-default`,
            `var(--${item}-${theme})`
        )
    })
}