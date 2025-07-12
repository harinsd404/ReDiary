
class GlareCard {
    constructor(element) {
        this.element = element;
        this.inner = element.querySelector('.glare-card-inner');
        this.foilLayer = element.querySelector('.foil-layer');
        this.isPointerInside = false;
        this.state = {
            glare: { x: 50, y: 50 },
            background: { x: 50, y: 50 },
            rotate: { x: 0, y: 0 }
        };
        
        this.init();
    }

    init() {
        this.setupFoilBackground();
        this.bindEvents();
    }

    setupFoilBackground() {
        const foilSvg = `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`;
        
        const rainbow = `repeating-linear-gradient(
            0deg,
            rgb(255,119,115) calc(5% * 1),
            rgba(255,237,95,1) calc(5% * 2),
            rgba(168,255,95,1) calc(5% * 3),
            rgba(131,255,247,1) calc(5% * 4),
            rgba(120,148,255,1) calc(5% * 5),
            rgb(216,117,255) calc(5% * 6),
            rgb(255,119,115) calc(5% * 7)
        ) 0% var(--bg-y)/200% 700% no-repeat`;
        
        const diagonal = `repeating-linear-gradient(
            128deg,
            #0e152e 0%,
            hsl(180,10%,60%) 3.8%,
            hsl(180,10%,60%) 4.5%,
            hsl(180,10%,60%) 5.2%,
            #0e152e 10%,
            #0e152e 12%
        ) var(--bg-x) var(--bg-y)/300% no-repeat`;
        
        const shade = `radial-gradient(
            farthest-corner circle at var(--m-x) var(--m-y),
            rgba(255,255,255,0.1) 12%,
            rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0.25) 120%
        ) var(--bg-x) var(--bg-y)/300% no-repeat`;

        this.foilLayer.style.background = `${foilSvg} center/100% no-repeat, ${rainbow}, ${diagonal}, ${shade}`;
        this.foilLayer.style.setProperty('--foil-svg', foilSvg);
    }

    updateStyles() {
        const { background, rotate, glare } = this.state;
        
        this.element.style.setProperty('--m-x', `${glare.x}%`);
        this.element.style.setProperty('--m-y', `${glare.y}%`);
        this.element.style.setProperty('--r-x', `${rotate.x}deg`);
        this.element.style.setProperty('--r-y', `${rotate.y}deg`);
        this.element.style.setProperty('--bg-x', `${background.x}%`);
        this.element.style.setProperty('--bg-y', `${background.y}%`);
    }

    bindEvents() {
        this.element.addEventListener('pointermove', (event) => {
            const rotateFactor = 0.4;
            const rect = this.element.getBoundingClientRect();
            const position = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
            const percentage = {
                x: (100 / rect.width) * position.x,
                y: (100 / rect.height) * position.y
            };
            const delta = {
                x: percentage.x - 50,
                y: percentage.y - 50
            };

            const { background, rotate, glare } = this.state;
            
            background.x = 50 + percentage.x / 4 - 12.5;
            background.y = 50 + percentage.y / 3 - 16.67;
            rotate.x = -(delta.x / 3.5) * rotateFactor;
            rotate.y = (delta.y / 2) * rotateFactor;
            glare.x = percentage.x;
            glare.y = percentage.y;

            this.updateStyles();
        });

        this.element.addEventListener('pointerenter', () => {
            this.isPointerInside = true;
            setTimeout(() => {
                if (this.isPointerInside) {
                    this.element.style.setProperty('--duration', '0s');
                }
            }, 300);
        });

        this.element.addEventListener('pointerleave', () => {
            this.isPointerInside = false;
            this.element.style.removeProperty('--duration');
            this.element.style.setProperty('--r-x', '0deg');
            this.element.style.setProperty('--r-y', '0deg');
        });
    }
}

// 모든 글레어 카드 초기화
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glare-card');
    cards.forEach(card => new GlareCard(card));
});
