document.addEventListener('DOMContentLoaded', () => {
    // Elementos do Modal de Conta / Cliente
    const accountButton = document.getElementById('account-button');
    const accountModal = document.getElementById('account-modal');
    const closeAccountModal = document.getElementById('close-account-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginPanel = document.getElementById('login-panel');
    const registerPanel = document.getElementById('register-panel');
    const accountLogged = document.getElementById('account-logged');
    
    // Sub-abas da Área Logada (Meus Pedidos / Meus Dados)
    const subtabBtns = document.querySelectorAll('.subtab-btn');
    const tabPedidos = document.getElementById('tab-pedidos');
    const tabDados = document.getElementById('tab-dados');

    // Abrir/Fechar modal de conta pelo ícone do utilizador
    if (accountButton) {
        accountButton.addEventListener('click', () => {
            if(accountModal) accountModal.hidden = false;
            if(modalBackdrop) modalBackdrop.hidden = false;
        });
    }

    if (closeAccountModal) {
        closeAccountModal.addEventListener('click', () => {
            if(accountModal) accountModal.hidden = true;
            if(modalBackdrop) modalBackdrop.hidden = true;
        });
    }

    // Alternar entre abas de Entrar e Criar Conta
    if (loginTab && registerTab) {
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            loginPanel.hidden = false;
            registerPanel.hidden = true;
        });

        registerTab.addEventListener('click', () => {
            registerTab.classList.add('active');
            loginTab.classList.remove('active');
            registerPanel.hidden = false;
            loginPanel.hidden = true;
        });
    }

    // Validação ao Criar Conta (Validar se senhas coincidem e guardar dados)
    const registerForm = document.getElementById('register-panel');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm').value;
            const errorMsg = document.getElementById('register-message');

            if (password !== confirmPassword) {
                e.preventDefault();
                if(errorMsg) {
                    errorMsg.textContent = 'As senhas não coincidem! Por favor, verifique.';
                    errorMsg.style.color = '#b00020';
                }
                return;
            }

            // Guarda os dados declarados localmente para exibir em "Meus Dados"
            localStorage.setItem('versa_user_name', name);
            localStorage.setItem('versa_user_email', email);
        });
    }

    // Navegação interna das sub-abas do cliente (Pedidos vs Dados)
    subtabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            subtabBtns.forEach(b => {
                b.classList.remove('active');
                b.style.color = '#666';
                b.style.borderBottom = 'none';
            });
            e.target.classList.add('active');
            e.target.style.color = '#2c2c2c';
            e.target.style.borderBottom = '2px solid #2c2c2c';

            const targetTab = e.target.getAttribute('data-subtab');
            if (targetTab === 'pedidos') {
                if(tabPedidos) tabPedidos.hidden = false;
                if(tabDados) tabDados.hidden = true;
            } else {
                if(tabPedidos) tabPedidos.hidden = true;
                if(tabDados) tabDados.hidden = false;
                
                // Exibe os dados declarados pelo utilizador
                const displayName = document.getElementById('user-display-name');
                const displayEmail = document.getElementById('user-display-email');
                if(displayName) displayName.textContent = localStorage.getItem('versa_user_name') || 'Cliente Versa';
                if(displayEmail) displayEmail.textContent = localStorage.getItem('versa_user_email') || 'cliente@email.com';
            }
        });
    });

    // Finalização de compra (Checkout), Mensagem de Sucesso e Histórico
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutModal = document.getElementById('checkout-modal');
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Exibe mensagem de sucesso personalizada ao finalizar a compra
            alert("🎉 Pedido finalizado com sucesso! Agradecemos a sua preferência na VERSA. O seu pedido já está a ser processado e registado no seu histórico.");
            
            const nomeCliente = document.getElementById('checkout-name').value;
            localStorage.setItem('versa_user_name', nomeCliente);
            
            // Fecha o modal de checkout
            if(checkoutModal) checkoutModal.hidden = true;
            if(modalBackdrop) modalBackdrop.hidden = true;
            
            // Alterna a interface para o modo logado com o pedido efetuado
            if(loginPanel) loginPanel.hidden = true;
            if(registerPanel) registerPanel.hidden = true;
            if(accountLogged) accountLogged.hidden = false;
            
            const loggedName = document.getElementById('logged-name');
            if(loggedName) loggedName.textContent = `Olá, ${nomeCliente}`;
            
            // Mostra os produtos comprados na aba "Meus Pedidos"
            const listaPedidos = document.getElementById('lista-pedidos');
            if(listaPedidos) {
                listaPedidos.innerHTML = `
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #eee;">
                        <p style="font-weight: 600; color: #2c2c2c; margin-bottom: 4px;">Pedido Recente - VERSA</p>
                        <p style="font-size: 13px; color: #666; margin-bottom: 6px;">Status: Pagamento Confirmado · Entrega a caminho</p>
                        <p style="font-size: 13px; color: #444;">Os produtos da sua sacola foram associados com sucesso à sua conta.</p>
                    </div>
                `;
            }
        });
    }
});