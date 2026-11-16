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
    const modalProductPrice = document.querySelector("#product-modal-price");
    const modalProductColors = document.querySelector("#product-modal-colors");
    const modalAddBag = document.querySelector("#modal-add-bag");
    const modalProductDescription = document.querySelector("#product-modal-description");
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
                thumbImage.alt = `${name} foto ${index + 1}`;
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

    // Preenche os dados do utilizador e os pedidos vindos do PHP/MySQL diretamente na aba Meus Pedidos
    function refreshAccountView() {
        fetch('../backend/busca-pedidos.php')
            .then(response => response.json())
            .then(data => {
                const logged = data.logado;
                
                loginPanel?.toggleAttribute("hidden", logged);
                registerPanel?.toggleAttribute("hidden", logged);
                accountLogged?.toggleAttribute("hidden", !logged);
                loginTab?.toggleAttribute("hidden", logged);
                registerTab?.toggleAttribute("hidden", logged);
                
                accountTitle.textContent = logged ? `Olá, ${data.nome}` : "Entre na sua conta";
                accountWelcome.textContent = logged ? "Sua conta VERSA está ativa com integração ao servidor." : "Acesse seus dados ou crie uma conta VERSA.";
                
                if (logged) {
                    loggedName.textContent = `E-mail: ${data.email}`;
                    const userNameDisp = document.querySelector("#user-name-disp");
                    if (userNameDisp) userNameDisp.textContent = data.nome || '-';
                    
                    const listaPedidos = document.querySelector("#lista-pedidos");
                    if (listaPedidos) {
                        if (data.pedidos && data.pedidos.length > 0) {
                            listaPedidos.innerHTML = data.pedidos.map(p => `
                                <div class="pedido-item" style="border: 1px solid #e0e0e0; padding: 12px; margin-bottom: 10px; border-radius: 6px; background: #fff; font-size: 13px;">
                                    <p style="margin-bottom: 4px;"><strong>Pedido:</strong> #${p.id}</p>
                                    <p style="margin-bottom: 4px;"><strong>Total:</strong> ${money(p.total)}</p>
                                    <p style="margin-bottom: 4px;"><strong>Status:</strong> ${p.status}</p>
                                    <p style="color: #666; font-size: 12px;"><strong>Data:</strong> ${p.data_pedido}</p>
                                </div>
                            `).join('');
                        } else {
                            listaPedidos.innerHTML = `
                                <div style="background: #f9f9f9; padding: 20px; border-radius: 6px; text-align: center;">
                                    <p class="empty-order" style="font-size: 13px; color: #777; margin-bottom: 8px;">Você ainda não tem pedidos recentes.</p>
                                    <a href="#produtos" style="font-size: 12px; color: #2c2c2c; text-decoration: underline;">Explorar produtos</a>
                                </div>
                            `;
                        }
                    }
                }
                
                accountButton?.setAttribute("aria-label", logged ? `Conta de ${data.nome}` : "Abrir área do cliente");
            })
            .catch(error => {
                console.error("Erro ao carregar dados da conta:", error);
            });
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

    // Registo com validação em JS + integração com o backend PHP
    document.querySelector("#register-panel")?.addEventListener("submit", (event) => {
        event.preventDefault();

        const nomeInput = document.querySelector("#register-name");
        const emailInput = document.querySelector("#register-email");
        const senhaInput = document.querySelector("#register-password");
        const confirmInput = document.querySelector("#register-confirm");

        const errNome = document.querySelector("#error-register-name");
        const errEmail = document.querySelector("#error-register-email");
        const errSenha = document.querySelector("#error-register-password");
        const errConfirm = document.querySelector("#error-register-confirm");

        if (errNome) errNome.textContent = "";
        if (errEmail) errEmail.textContent = "";
        if (errSenha) errSenha.textContent = "";
        if (errConfirm) errConfirm.textContent = "";
        registerMessage.textContent = "";

        const nome = nomeInput?.value.trim() || "";
        const email = emailInput?.value.trim() || "";
        const senha = senhaInput?.value || "";
        const confirmar = confirmInput?.value || "";

        let temErro = false;

        if (nome === "") {
            if (errNome) errNome.textContent = "Por favor, preencha o seu nome completo.";
            temErro = true;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            if (errEmail) errEmail.textContent = "O e-mail é obrigatório.";
            temErro = true;
        } else if (!emailRegex.test(email)) {
            if (errEmail) errEmail.textContent = "Digite um e-mail válido (ex: nome@dominio.com).";
            temErro = true;
        }

        if (senha === "") {
            if (errSenha) errSenha.textContent = "Crie uma senha.";
            temErro = true;
        } else if (senha.length < 6) {
            if (errSenha) errSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
            temErro = true;
        }

        if (confirmar === "") {
            if (errConfirm) errConfirm.textContent = "Confirme a sua senha.";
            temErro = true;
        } else if (senha !== confirmar) {
            if (errConfirm) errConfirm.textContent = "As senhas não coincidem.";
            temErro = true;
        }

        if (temErro) {
            registerMessage.textContent = "Corrija os campos destacados acima antes de continuar.";
            return;
        }

        const formData = new FormData(event.target);
        
        fetch('../backend/processa-cadastro.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(resultado => {
            if (resultado.sucesso) {
                registerMessage.textContent = "Conta criada com sucesso.";
                event.target.reset();
                refreshAccountView();
                showToast("Conta VERSA criada com sucesso.");
            } else {
                registerMessage.textContent = resultado.mensagem || "Erro ao criar conta.";
            }
        })
        .catch(() => {
            registerMessage.textContent = "Erro de conexão com o servidor.";
        });
    });

    // Login integrado com o backend PHP
    document.querySelector("#login-panel")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        fetch('../backend/processa-login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(resultado => {
            if (resultado.sucesso) {
                event.target.reset();
                refreshAccountView();
                showToast("Bem-vinda de volta.");
            } else {
                loginMessage.textContent = resultado.mensagem || "E-mail ou senha incorretos.";
            }
        })
        .catch(() => {
            loginMessage.textContent = "Erro de conexão com o servidor.";
        });
    });

    // Logout integrado com o backend PHP
    logoutButton?.addEventListener("click", () => {
        fetch('../backend/processa-logout.php')
            .then(() => {
                refreshAccountView();
                setAccountTab("login");
                showToast("Você saiu da sua conta.");
            });
    });

    function refreshCheckoutSummary() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        if (checkoutItems) checkoutItems.textContent = String(totalItems);
        if (checkoutTotal) checkoutTotal.textContent = money(total);
    }

    function openCheckout() {
        if (cart.length === 0) return;
        closeCartView();
        closeProductModalView();
        refreshCheckoutSummary();
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

    closeCheckoutModal?.addEventListener("click", closeCheckoutView);
    backToCart?.addEventListener("click", () => { closeCheckoutView(); openCart(); });

    // Checkout atualizado para enviar o pedido diretamente para a base de dados MySQL via PHP
    checkoutForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (cart.length === 0) { checkoutMessage.textContent = "Sua sacola está vazia."; return; }
        
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const formData = new FormData(checkoutForm);
        formData.append('total', total);

        fetch('../backend/processa-checkout.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(resultado => {
            if (resultado.sucesso) {
                cart = [];
                updateBag();
                checkoutMessage.textContent = resultado.mensagem;
                showToast("Pedido confirmado com sucesso!");
                window.setTimeout(() => closeCheckoutView(), 1800);
            } else {
                checkoutMessage.textContent = resultado.mensagem || "Erro ao finalizar pedido.";
            }
        })
        .catch(() => {
            checkoutMessage.textContent = "Erro de conexão com o servidor.";
        });
    });

    checkoutButton?.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Adicione uma peça antes de finalizar o pedido.");
            return;
        }
        fetch('../backend/verifica-sessao.php')
            .then(res => res.json())
            .then(data => {
                if (!data.logado) {
                    closeCartView();
                    openAccountModal();
                    setAccountTab("login");
                    loginMessage.textContent = "Entre ou crie uma conta para continuar o pedido.";
                    return;
                }
                openCheckout();
            });
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

    const contactForm = document.querySelector(".contact-form");
    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        let formMessage = contactForm.querySelector(".form-message");
        if (!formMessage) {
            formMessage = document.createElement("p");
            formMessage.className = "form-message";
            formMessage.setAttribute("aria-live", "polite");
            contactForm.appendChild(formMessage);
        }
        formMessage.textContent = "Mensagem enviada com sucesso! Entraremos em contacto em breve.";
        contactForm.reset();
    });

    // Controle das abas internas da área logada (Meus Pedidos / Meus Dados)
    document.querySelectorAll(".subtab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const tab = btn.dataset.subtab;
            const pedidosTab = document.getElementById("tab-pedidos");
            const dadosTab = document.getElementById("tab-dados");

            document.querySelectorAll(".subtab-btn").forEach((b) => {
                b.style.borderBottom = "none";
                b.style.color = "#666";
                b.style.fontWeight = "400";
            });

            if (tab === "pedidos") {
                if (pedidosTab) pedidosTab.style.display = "block";
                if (dadosTab) dadosTab.style.display = "none";
            } else {
                if (pedidosTab) pedidosTab.style.display = "none";
                if (dadosTab) dadosTab.style.display = "block";
            }

            btn.style.borderBottom = "2px solid #2c2c2c";
            btn.style.color = "#2c2c2c";
            btn.style.fontWeight = "600";
        });
    });

    startSlider();
})();