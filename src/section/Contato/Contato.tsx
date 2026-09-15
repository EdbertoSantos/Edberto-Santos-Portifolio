import './Contato.css'

const email = 'email@gmail.com'
const anoAtual = new Date().getFullYear()

function Contato() {
    return (
        <section className="contato">
            <div className="contato__glow" />

            <div className="contato__content">
                <h2 className="contato__title">
                    <span className="contato__title-destaque">Vamos construir</span>
                    <span className="contato__title-branco">algo memorável</span>
                </h2>

                <a className="contato__botao-email" href={`mailto:${email}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 7l10 6 10-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {email}
                </a>

                <div className="contato__redes">
                    <a
                        className="contato__rede-icone"
                        href="https://github.com/seu-usuario"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.28 9.28 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                        </svg>
                    </a>
                    <a
                        className="contato__rede-icone"
                        href="https://linkedin.com/in/seu-usuario"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
                        </svg>
                    </a>
                </div>

                <p className="contato__usernames">@seu-usuario · github.com/seu-usuario</p>
                <p className="contato__copyright">© {anoAtual} José Santos. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Contato