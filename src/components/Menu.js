import '../scss/Menu.css';

const Menu = () => {
    return (
        <header id="header">
            <div className="c-header-top bg-main hidden-xs">
                <div className="container c-header-top__container">
                    <div className="top-bar left c-header-top__container__top-bar">
                        <ul className="horizontal-menu c-header-top__container__top-bar__horizontal-menu">
                            <li className='c-header-top__container__top-bar__horizontal-menu__list'>
                                <a href="#" className='c-header-top__container__top-bar__horizontal-menu__list__link'>
                                    <i className="fa fa-envelope c-header-top__container__top-bar__horizontal-menu__list__link__fa-envelope" aria-hidden="true"></i>
                                    Organic@company.com
                                </a>
                            </li>
                            <li className='c-header-top__container__top-bar__horizontal-menu__list'>
                                <a href="#" className='c-header-top__container__top-bar__horizontal-menu__list__link'>Free Shipping for all Order of $99</a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar right c-header-top__container__top-bar">
                        <ul className="social-list c-header-top__container__top-bar__social-list">
                            <li className='social-list c-header-top__container__top-bar__social-list__list'>
                                <a href="#" className='social-list c-header-top__container__top-bar__social-list__list__link'>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className='social-list c-header-top__container__top-bar__social-list__list'>
                                <a href="#" className='social-list c-header-top__container__top-bar__social-list__list__link'>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className='social-list c-header-top__container__top-bar__social-list__list'>
                                <a href="#" className='social-list c-header-top__container__top-bar__social-list__list__link'>
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="horizontal-menu c-header-top__container__top-bar__horizontal-menu">
                            <li className="horz-menu-item currency c-header-top__container__top-bar__horizontal-menu__horz-item">
                                <select name="" style={{ display: 'none' }}>
                                    <option value="eur">€ EUR (Euro)</option>
                                    <option value="usd" selected="">$ USD (Dollar)</option>
                                    <option value="usd">£ GBP (Pound)</option>
                                    <option value="usd">¥ JPY (Yen)</option>
                                </select>
                                <div className="nice-select" tabindex="0">
                                    <span className="current c-header-top__container__top-bar__horizontal-menu__horz-item__current">$ USD (Dollar)</span>
                                    <ul className="list c-header-top__container__top-bar__horizontal-menu__horz-item__list">
                                        <li data-value="eur" className="option">€ EUR (Euro)</li>
                                        <li data-value="usd" className="option selected">$ USD (Dollar)</li>
                                        <li data-value="usd" className="option">£ GBP (Pound)</li>
                                        <li data-value="usd" className="option">¥ JPY (Yen)</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="horz-menu-item lang c-header-top__container__top-bar__horizontal-menu__horz-item">
                                <select name="language" style={{ display: 'none' }}>
                                    <option value="fr">French (EUR)</option>
                                    <option value="en" selected="">English (USD)</option>
                                    <option value="ger">Germany (GBP)</option>
                                    <option value="jp">Japan (JPY)</option>
                                </select>
                                <div className="nice-select" tabindex="0">
                                    <span className="current c-header-top__container__top-bar__horizontal-menu__horz-item__current">English (USD)</span>
                                    <ul className="list c-header-top__container__top-bar__horizontal-menu__horz-item__list">
                                        <li data-value="fr" className="option">French (EUR)</li>
                                        <li data-value="en" className="option selected">English (USD)</li>
                                        <li data-value="ger" className="option">Germany (GBP)</li>
                                        <li data-value="jp" className="option">Japan (JPY)</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='c-header-top__container__top-bar__horizontal-menu__horz-item'>
                                <a href="login.html" className="login-link c-header-top__container__top-bar__horizontal-menu__horz-item__login-link">
                                    <i className="biolife-icon icon-login c-header-top__container__top-bar__horizontal-menu__horz-item__login-link__biolife-icon"></i>
                                    Login/Register
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu;