(() => {
    "use strict";

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".nav-link");
    const searchButton = document.querySelector("#search-button");
    const searchPanel = document.querySelector("#search-panel");
    const searchInput = document.querySelector("#busca");
    const searchSubmit = document.querySelector("#search-submit");
    const searchMessage = document.querySelector("#search-message");
    const emptySearch = document.querySelector("#empty-search");
    const productCards = [...document.querySelectorAll(".product-card")];
    const bagCount = document.querySelector(".bag-count");
    const addBagButtons = document.querySelectorAll(".add-bag");
    const favoriteButtons = document.querySelectorAll(".favorite-button");
    const accountButton = document.querySelector("#account-button");
    const modalBackdrop = document.querySelector("#modal-backdrop");
    const cartDrawer = document.querySelector("#cart-drawer");
    const closeCart = document.querySelector("#close-cart");
    const cartItemsContainer = document.querySelector("#cart-items");
    const cartTotal = document.querySelector("#cart-total");
    const checkoutButton = document.querySelector("#checkout-button");
    const productModal = document.querySelector("#product-modal");
    const closeProductModal = document.querySelector("#close-product-modal");
    const modalProductImage = document.querySelector("#modal-product-image");
    const modalGalleryThumbs = document.querySelector("#modal-gallery-thumbs");
    const modalProductTitle = document.querySelector("#product-modal-title");
    const modalProductPrice = document.querySelector("#modal-product-price");
    const modalProductColors = document.querySelector("#modal-product-colors");
    const modalAddBag = document.querySelector("#modal-add-bag");
    const modalProductDescription = document.querySelector("#modal-product-description");
    const modalSizeOptions = document.querySelector("#modal-size-options");
    const sizeMessage = document.querySelector("#size-message");
    const openSizeGuide = document.querySelector("#open-size-guide");
    const checkoutModal = document.querySelector("#checkout-modal");
    const closeCheckoutModal = document.querySelector("#close-checkout-modal");
    const checkoutForm = document.querySelector("#checkout-form");
    const checkoutName = document.querySelector("#checkout-name");
    const checkoutEmail = document.querySelector("#checkout-email");
    const checkoutItems = document.querySelector("#checkout-items");
    const checkoutTotal = document.querySelector("#checkout-total");
    const checkoutMessage = document.querySelector("#checkout-message");
    const backToCart = document.querySelector("#back-to-cart");
    const cardFields = document.querySelector("#card-fields");
    const accountModal = document.querySelector("#account-modal");
    const closeAccountModal = document.querySelector("#close-account-modal");
    const loginTab = document.querySelector("#login-tab");
    const registerTab = document.querySelector("#register-tab");
    const loginPanel = document.querySelector("#login-panel");
    const registerPanel = document.querySelector("#register-panel");
    const loginMessage = document.querySelector("#login-message");
    const registerMessage = document.querySelector("#register-message");
    const accountWelcome = document.querySelector("#account-welcome");
    const accountTitle = document.querySelector("#account-title");
    const accountLogged = document.querySelector("#account-logged");
    const loggedName = document.querySelector("#logged-name");
    const logoutButton = document.querySelector("#logout-button");

    const heroImage = document.querySelector(".hero-media img");
    const heroTitle = document.querySelector("#hero-title");
    const heroDescription = document.querySelector(".hero-content > p:not(.eyebrow)");
    const heroIndicators = [...document.querySelectorAll(".indicator")];
    const previousSlide = document.querySelector('[data-slide="prev"]');
    const nextSlide = document.querySelector('[data-slide="next"]');

    const slides = [
        { image: "img/hero-modelo.jpg", title: ["Seu estilo,", "do seu jeito."], description: "Peças versáteis para acompanhar sua rotina com personalidade." },
        { image: "img/prod-vestido-midi.jpg", title: ["Vista sua", "versatilidade."], description: "Composições que transitam entre momentos, estilos e ocasiões." },
        { image: "img/prod-blusa-manga-longa.jpg", title: ["Sua rotina,", "sua versão."], description: "Uma seleção feminina pensada para combinar com você." }
    ];

    const productGalleries = {
        "Vestido Midi Alfaiataria": ["img/prod-vestido-midi.jpg", "img/prod-vestido-midi-1.jpg", "img/prod-vestido-midi-2.jpg", "img/prod-vestido-midi-3.jpg", "img/prod-vestido-midi-4.jpg"],
        "Blusa Manga Longa": ["img/prod-blusa-manga-longa.jpg", "img/prod-blusa-manga-longa-1.jpg", "img/prod-blusa-manga-longa-2.jpg", "img/prod-blusa-manga-longa-3.jpg", "img/prod-blusa-manga-longa-4.jpg"],
        "Calça Wide Leg": ["img/prod-calca-wide-leg.jpg", "img/prod-calca-wide-leg-1.jpg", "img/prod-calca-wide-leg-2.jpg", "img/prod-calca-wide-leg-3.jpg", "img/prod-calca-wide-leg-4.jpg"],
        "Blazer Oversized": ["img/prod-blazer-oversized.jpg", "img/prod-blazer-oversized-1.jpg", "img/prod-blazer-oversized-2.jpg", "img/prod-blazer-oversized-3.jpg", "img/prod-blazer-oversized-4.jpg"]
    };

    const productDetails = {
        "Vestido Midi Alfaiataria": { description: "Vestido midi de alfaiataria com caimento elegante, cintura marcada e modelagem pensada para diferentes ocasiões.", sizes: ["PP", "P", "M", "G", "GG"] },
        "Blusa Manga Longa": { description: "Blusa de manga longa com toque macio e modelagem versátil para composições casuais ou sofisticadas.", sizes: ["PP", "P", "M", "G", "GG"] },
        "Calça Wide Leg": { description: "Calça wide leg de cintura confortável e pernas amplas, ideal para alongar a silhueta e criar looks contemporâneos.", sizes: ["34", "36", "38", "40", "42", "44"] },
        "Blazer Oversized": { description: "Blazer oversized de alfaiataria com estrutura confortável e visual contemporâneo para sobreposições.", sizes: ["PP", "P", "M", "G", "GG"] }
    };

    const sizeGuide = {
        "Vestido Midi Alfaiataria": "Busto: PP 80–84 | P 84–88 | M 88–94 | G 94–100 | GG 100–108 cm. Cintura: PP 60–64 | P 64–68 | M 68–74 | G 74–80 | GG 80–88 cm.",
        "Blusa Manga Longa": "Busto: PP 80–84 | P 84–88 | M 88–94 | G 94–100 | GG 100–108 cm. Prefira o tamanho habitual para caimento regular.",
        "Calça Wide Leg": "Quadril: 34 86–90 | 36 90–94 | 38 94–98 | 40 98–102 | 42 102–106 | 44 106–110 cm. Meça a cintura na parte mais estreita.",
        "Blazer Oversized": "Busto: PP 80–84 | P 84–88 | M 88–94 | G 94–100 | GG 100–108 cm. A modelagem é ampla por proposta; escolha o habitual para o efeito oversized."
    };

    let cart = [];
    let currentSlide = 0;
    let slideTimer = null;
    let selectedProduct = null;

    const money = (value) => `R$ ${Number(value).toFixed(2).replace(".", ",")}`;

    function setMenu(open) {
        if (!menuToggle || !mainNav) return;
        mainNav.classList.toggle("open", open);
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }

    menuToggle?.addEventListener("click", () => setMenu(!mainNav.classList.contains("open")));
    navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

    document.addEventListener("click", (event) => {
        if (!mainNav?.classList.contains("open")) return;
        const target = event.target;
        if (!(target instanceof Node)) return;
        if (!mainNav.contains(target) && !menuToggle?.contains(target)) setMenu(false);
    });

    function setSearch(open) {
        if (!searchPanel || !searchButton) return;
        if (open) {
            searchPanel.removeAttribute("hidden");
            searchButton.setAttribute("aria-expanded", "true");
            window.setTimeout(() => searchInput?.focus(), 0);
        } else {
            searchPanel.setAttribute("hidden", "");
            searchButton.setAttribute("aria-expanded", "false");
        }
    }

    searchButton?.addEventListener("click", () => setSearch(searchPanel?.hasAttribute("hidden")));

    function filterProducts() {
        const term = searchInput?.value.trim().toLocaleLowerCase("pt-BR") || "";
        let visibleProducts = 0;
        productCards.forEach((card) => {
            const searchable = [card.dataset.product || "", card.querySelector(".product-category")?.textContent || "", card.querySelector(".product-colors")?.textContent || ""].join(" ").toLocaleLowerCase("pt-BR");
            const matches = term === "" || searchable.includes(term);
            card.hidden = !matches;
            if (matches) visibleProducts += 1;
        });
        if (emptySearch) emptySearch.hidden = visibleProducts !== 0;
        if (searchMessage) searchMessage.textContent = term === "" ? "Mostrando todos os produtos." : `${visibleProducts} produto(s) encontrado(s).`;
        if (term !== "") document.querySelector("#produtos")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }

    searchSubmit?.addEventListener("click", filterProducts);
    searchInput?.addEventListener("keydown", (event) => {
        if (event.key === "Enter") { event.preventDefault(); filterProducts(); }
        if (event.key === "Escape") setSearch(false);
    });

    function showToast(message) {
        let toast = document.querySelector(".site-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.className = "site-toast";
            toast.setAttribute("role", "status");
            toast.setAttribute("aria-live", "polite");
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.hidden = false;
        window.clearTimeout(Number(toast.dataset.timer || 0));
        const timer = window.setTimeout(() => { toast.hidden = true; }, 2200);
        toast.dataset.timer = String(timer);
    }

    function updateBag() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (bagCount) bagCount.textContent = String(totalItems);
        renderCart();
    }

    function addToCart(card, size = "") {
        if (!card) return;
        const product = {
            name: card.dataset.product,
            price: Number(card.dataset.price),
            image: card.dataset.image,
            colors: card.dataset.colors,
            size: size || "A definir"
        };
        const existing = cart.find((item) => item.name === product.name && item.size === product.size);
        if (existing) existing.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        updateBag();
        showToast(`${product.name} foi adicionado à sacola.`);
        openCart();
    }

    function renderCart() {
        if (!cartItemsContainer || !cartTotal) return;
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Sua sacola está vazia.</p>';
            cartTotal.textContent = "R$ 0,00";
            return;
        }
        cartItemsContainer.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            const row = document.createElement("article");
            row.className = "cart-item";
            row.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${money(item.price)}</p>
                    <p class="cart-item-size">Tamanho: ${item.size}</p>
                    <div class="cart-quantity" aria-label="Quantidade de ${item.name}">
                        <button type="button" data-cart-action="decrease" data-index="${index}" aria-label="Diminuir quantidade">−</button>
                        <span>${item.quantity}</span>
                        <button type="button" data-cart-action="increase" data-index="${index}" aria-label="Aumentar quantidade">+</button>
                    </div>
                </div>
                <button class="cart-remove" type="button" data-cart-action="remove" data-index="${index}" aria-label="Remover ${item.name}">×</button>`;
            cartItemsContainer.appendChild(row);
        });
        cartTotal.textContent = money(total);
    }

    cartItemsContainer?.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-cart-action]");
        if (!button) return;
        const index = Number(button.dataset.index);
        const action = button.dataset.cartAction;
        if (!cart[index]) return;
        if (action === "increase") cart[index].quantity += 1;
        if (action === "decrease") cart[index].quantity -= 1;
        if (action === "remove" || cart[index].quantity <= 0) cart.splice(index, 1);
        updateBag();
    });

    function openCart() {
        closeProductModalView();
        closeAccountModalView();
        cartDrawer?.removeAttribute("aria-hidden");
        cartDrawer?.classList.add("open");
        modalBackdrop?.removeAttribute("hidden");
        document.body.classList.add("modal-open");
    }

    function closeCartView() {
        cartDrawer?.classList.remove("open");
        cartDrawer?.setAttribute("aria-hidden", "true");
        if (!productModal?.classList.contains("open") && !accountModal?.classList.contains("open")) {
            modalBackdrop?.setAttribute("hidden", "");
            document.body.classList.remove("modal-open");
        }
    }

    document.querySelector(".bag-button")?.addEventListener("click", openCart);
    closeCart?.addEventListener("click", closeCartView);

    addBagButtons.forEach((button) => {
        button.addEventListener("click", () => openProductModal(button.closest(".product-card")));
    });

    favoriteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const active = button.classList.toggle("active");
            const card = button.closest(".product-card");
            const productName = card?.dataset.product || "Produto";
            button.setAttribute("aria-pressed", String(active));
            button.textContent = active ? "♥" : "♡";
            button.setAttribute("aria-label", active ? `Remover ${productName} dos favoritos` : `Adicionar ${productName} aos favoritos`);
        });
    });

    function openProductModal(card) {
        if (!card || !productModal) return;
        selectedProduct = card;
        const name = card.dataset.product;
        const detail = productDetails[name] || { description: "Peça VERSA pensada para combinar com diferentes ocasiões.", sizes: ["PP", "P", "M", "G", "GG"] };
        const gallery = productGalleries[name] || [card.dataset.image];
        modalProductImage.src = gallery[0];
        modalProductImage.alt = card.dataset.product;
        if (modalGalleryThumbs) {
            modalGalleryThumbs.innerHTML = "";
            gallery.forEach((image, index) => {
                const thumb = document.createElement("button");
                thumb.type = "button";
                thumb.className = `gallery-thumb${index === 0 ? " active" : ""}`;
                thumb.setAttribute("aria-label", `Ver foto ${index + 1} de ${name}`);
                const thumbImage = document.createElement("img");
                thumbImage.src = image;
                thumbImage.alt = `${name} - foto ${index + 1}`;
                thumb.appendChild(thumbImage);
                thumb.addEventListener("click", () => {
                    modalProductImage.src = image;
                    modalGalleryThumbs.querySelectorAll(".gallery-thumb").forEach((item) => item.classList.remove("active"));
                    thumb.classList.add("active");
                });
                modalGalleryThumbs.appendChild(thumb);
            });
        }
        modalProductTitle.textContent = name;
        modalProductPrice.textContent = money(card.dataset.price);
        modalProductColors.textContent = `Cores: ${card.dataset.colors}`;
        modalProductDescription.textContent = detail.description;
        sizeMessage.textContent = "";
        modalSizeOptions.innerHTML = "";
        detail.sizes.forEach((size) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "size-option";
            button.textContent = size;
            button.dataset.size = size;
            button.addEventListener("click", () => {
                modalSizeOptions.querySelectorAll(".size-option").forEach((item) => item.classList.remove("active"));
                button.classList.add("active");
                sizeMessage.textContent = `Tamanho ${size} selecionado.`;
            });
            modalSizeOptions.appendChild(button);
        });
        productModal.removeAttribute("hidden");
        productModal.classList.add("open");
        modalBackdrop?.removeAttribute("hidden");
        document.body.classList.add("modal-open");
        window.setTimeout(() => closeProductModal?.focus(), 0);
    }

    function closeProductModalView() {
        productModal?.classList.remove("open");
        productModal?.setAttribute("hidden", "");
        selectedProduct = null;
    }

    document.querySelectorAll(".product-open-trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => openProductModal(trigger.closest(".product-card")));
        trigger.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openProductModal(trigger.closest(".product-card"));
            }
        });
    });

    closeProductModal?.addEventListener("click", closeProductModalView);
    modalAddBag?.addEventListener("click", () => {
        const selectedSize = modalSizeOptions?.querySelector(".size-option.active")?.dataset.size || "";
        if (!selectedSize) {
            sizeMessage.textContent = "Selecione um tamanho antes de adicionar a peça à sacola.";
            return;
        }
        if (selectedProduct) addToCart(selectedProduct, selectedSize);
        closeProductModalView();
    });

    openSizeGuide?.addEventListener("click", () => {
        if (!selectedProduct) return;
        showToast(sizeGuide[selectedProduct.dataset.product] || "Consulte a tabela de medidas da VERSA.");
    });

    function setAccountTab(mode) {
        const loginActive = mode === "login";
        loginTab?.classList.toggle("active", loginActive);
        registerTab?.classList.toggle("active", !loginActive);
        loginTab?.setAttribute("aria-selected", String(loginActive));
        registerTab?.setAttribute("aria-selected", String(!loginActive));
        loginPanel?.toggleAttribute("hidden", !loginActive);
        registerPanel?.toggleAttribute("hidden", loginActive);
        loginMessage.textContent = "";
        registerMessage.textContent = "";
    }

    function getAccount() {
        try { return JSON.parse(localStorage.getItem("versaAccount") || "null"); }
        catch { return null; }
    }

    function getLoggedUser() {
        try { return JSON.parse(sessionStorage.getItem("versaLoggedUser") || "null"); }
        catch { return null; }
    }

    function setLoggedUser(user) {
        sessionStorage.setItem("versaLoggedUser", JSON.stringify(user));
    }

    function refreshAccountView() {
        const user = getLoggedUser();
        const logged = Boolean(user);
        loginPanel?.toggleAttribute("hidden", logged);
        registerPanel?.toggleAttribute("hidden", logged);
        accountLogged?.toggleAttribute("hidden", !logged);
        loginTab?.toggleAttribute("hidden", logged);
        registerTab?.toggleAttribute("hidden", logged);
        accountTitle.textContent = logged ? `Olá, ${user.name}` : "Entre na sua conta";
        accountWelcome.textContent = logged ? "Sua conta VERSA está ativa neste navegador." : "Acesse seus dados ou crie uma conta VERSA.";
        if (logged) loggedName.textContent = user.email;
        accountButton?.setAttribute("aria-label", logged ? `Conta de ${user.name}` : "Abrir área do cliente");
    }

    function openAccountModal() {
        closeCartView();
        closeProductModalView();
        refreshAccountView();
        accountModal?.removeAttribute("hidden");
        accountModal?.classList.add("open");
        modalBackdrop?.removeAttribute("hidden");
        document.body.classList.add("modal-open");
        accountButton?.setAttribute("aria-expanded", "true");
    }

    function closeAccountModalView() {
        accountModal?.classList.remove("open");
        accountModal?.setAttribute("hidden", "");
        accountButton?.setAttribute("aria-expanded", "false");
    }

    accountButton?.addEventListener("click", openAccountModal);
    closeAccountModal?.addEventListener("click", closeAccountModalView);
    loginTab?.addEventListener("click", () => setAccountTab("login"));
    registerTab?.addEventListener("click", () => setAccountTab("register"));

    document.querySelector("#register-panel")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.querySelector("#register-name").value.trim();
        const email = document.querySelector("#register-email").value.trim().toLowerCase();
        const password = document.querySelector("#register-password").value;
        const confirm = document.querySelector("#register-confirm").value;
        if (password !== confirm) {
            registerMessage.textContent = "As senhas não coincidem.";
            return;
        }
        localStorage.setItem("versaAccount", JSON.stringify({ name, email, password }));
        setLoggedUser({ name, email });
        registerMessage.textContent = "Conta criada com sucesso.";
        event.target.reset();
        refreshAccountView();
        showToast("Conta VERSA criada com sucesso.");
    });

    document.querySelector("#login-panel")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.querySelector("#login-email").value.trim().toLowerCase();
        const password = document.querySelector("#login-password").value;
        const account = getAccount();
        if (!account || account.email !== email || account.password !== password) {
            loginMessage.textContent = "E-mail ou senha incorretos. Crie uma conta se ainda não tiver cadastro.";
            return;
        }
        setLoggedUser({ name: account.name, email: account.email });
        event.target.reset();
        refreshAccountView();
        showToast(`Bem-vinda, ${account.name}.`);
    });

    logoutButton?.addEventListener("click", () => {
        sessionStorage.removeItem("versaLoggedUser");
        refreshAccountView();
        setAccountTab("login");
        showToast("Você saiu da sua conta.");
    });

    function refreshCheckoutSummary() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        if (checkoutItems) checkoutItems.textContent = String(totalItems);
        if (checkoutTotal) checkoutTotal.textContent = money(total);
    }

    function openCheckout() {
        const user = getLoggedUser();
        if (!user || cart.length === 0) return;
        closeCartView();
        closeProductModalView();
        refreshCheckoutSummary();
        if (checkoutName) checkoutName.value = user.name || "";
        if (checkoutEmail) checkoutEmail.value = user.email || "";
        try {
            const saved = JSON.parse(localStorage.getItem("versaCheckoutData") || "null");
            if (saved) {
                Object.entries(saved).forEach(([key, value]) => {
                    const field = checkoutForm?.elements.namedItem(key);
                    if (field && typeof value === "string") field.value = value;
                });
            }
        } catch {}
        checkoutMessage.textContent = "";
        checkoutModal?.removeAttribute("hidden");
        checkoutModal?.classList.add("open");
        modalBackdrop?.removeAttribute("hidden");
        document.body.classList.add("modal-open");
        window.setTimeout(() => checkoutName?.focus(), 0);
    }

    function closeCheckoutView() {
        checkoutModal?.classList.remove("open");
        checkoutModal?.setAttribute("hidden", "");
        if (!cartDrawer?.classList.contains("open") && !productModal?.classList.contains("open") && !accountModal?.classList.contains("open")) {
            modalBackdrop?.setAttribute("hidden", "");
            document.body.classList.remove("modal-open");
        }
    }

    document.querySelectorAll('input[name="pagamento"]').forEach((input) => {
        input.addEventListener("change", () => {
            const isCard = input.value === "Cartão de crédito" && input.checked;
            cardFields?.toggleAttribute("hidden", !isCard);
            ["card-number", "card-name", "card-expiry", "card-cvv"].forEach((id) => {
                document.getElementById(id)?.toggleAttribute("required", isCard);
            });
        });
    });

    document.querySelector("#checkout-cep")?.addEventListener("input", (event) => {
        const input = event.currentTarget;
        const digits = input.value.replace(/\D/g, "").slice(0, 8);
        input.value = digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
    });

    document.querySelector("#card-number")?.addEventListener("input", (event) => {
        const digits = event.currentTarget.value.replace(/\D/g, "").slice(0, 16);
        event.currentTarget.value = digits.replace(/(.{4})/g, "$1 ").trim();
    });

    document.querySelector("#card-expiry")?.addEventListener("input", (event) => {
        const digits = event.currentTarget.value.replace(/\D/g, "").slice(0, 4);
        event.currentTarget.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    });

    closeCheckoutModal?.addEventListener("click", closeCheckoutView);
    backToCart?.addEventListener("click", () => { closeCheckoutView(); openCart(); });

    checkoutForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (cart.length === 0) { checkoutMessage.textContent = "Sua sacola está vazia."; return; }
        const data = Object.fromEntries(new FormData(checkoutForm).entries());
        const cep = String(data.cep || "").replace(/\D/g, "");
        if (cep.length !== 8) { checkoutMessage.textContent = "Informe um CEP válido com 8 números."; return; }
        localStorage.setItem("versaCheckoutData", JSON.stringify(data));
        const payment = data.pagamento;
        const customerName = data.nome;
        const orderNumber = `VSA-${Date.now().toString().slice(-6)}`;
        cart = [];
        updateBag();
        checkoutMessage.textContent = `Pedido ${orderNumber} confirmado para ${customerName}. Forma de pagamento: ${payment}.`;
        showToast(`Pedido ${orderNumber} confirmado.`);
        window.setTimeout(() => closeCheckoutView(), 1800);
    });

    checkoutButton?.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Adicione uma peça antes de finalizar o pedido.");
            return;
        }
        if (!getLoggedUser()) {
            closeCartView();
            openAccountModal();
            setAccountTab("login");
            loginMessage.textContent = "Entre ou crie uma conta para continuar o pedido.";
            return;
        }
        openCheckout();
    });

    modalBackdrop?.addEventListener("click", () => {
        closeCartView();
        closeProductModalView();
        closeAccountModalView();
        closeCheckoutView();
        modalBackdrop.setAttribute("hidden", "");
        document.body.classList.remove("modal-open");
    });

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        const slide = slides[currentSlide];
        if (heroImage) { heroImage.src = slide.image; heroImage.alt = `Destaque VERSA: ${slide.title.join(" ")}`; }
        if (heroTitle) {
            heroTitle.innerHTML = `<span>${slide.title[0]}</span><span>${slide.title[1]}</span>`;
        }
        if (heroDescription) heroDescription.textContent = slide.description;
        heroIndicators.forEach((indicator, indexValue) => {
            const active = indexValue === currentSlide;
            indicator.classList.toggle("active", active);
            if (active) indicator.setAttribute("aria-current", "true"); else indicator.removeAttribute("aria-current");
        });
    }

    function startSlider() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        window.clearInterval(slideTimer);
        slideTimer = window.setInterval(() => showSlide(currentSlide + 1), 6000);
    }
    function stopSlider() { window.clearInterval(slideTimer); }
    previousSlide?.addEventListener("click", () => { showSlide(currentSlide - 1); startSlider(); });
    nextSlide?.addEventListener("click", () => { showSlide(currentSlide + 1); startSlider(); });
    heroIndicators.forEach((indicator) => indicator.addEventListener("click", () => { showSlide(Number(indicator.dataset.slide)); startSlider(); }));
    document.querySelector(".hero")?.addEventListener("mouseenter", stopSlider);
    document.querySelector(".hero")?.addEventListener("mouseleave", startSlider);
    document.querySelector(".hero")?.addEventListener("focusin", stopSlider);
    document.querySelector(".hero")?.addEventListener("focusout", (event) => { if (!event.currentTarget.contains(event.relatedTarget)) startSlider(); });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenu(false);
            setSearch(false);
            closeCartView();
            closeProductModalView();
            closeAccountModalView();
            closeCheckoutView();
            modalBackdrop?.setAttribute("hidden", "");
            document.body.classList.remove("modal-open");
        }
    });

    document.querySelector(".contact-form")?.addEventListener("reset", () => {
        window.setTimeout(() => {
            const message = document.querySelector(".contact-form .form-message");
            if (message) message.textContent = "";
        }, 0);
    });

    updateBag();
    refreshAccountView();
    showSlide(0);
    startSlider();
})();
