<!-- Contacts -->
<section id="contacts">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-description mb-5">
                    <h2 class="section-description__title text-white">Контакты</h2>
                    <div class="section-description__text">Напишите нам</div>
                </div>
                <form id="form-order">
                    <div class="form-row d-flex flex-column flex-lg-row justify-content-between align-items-center mb-lg-4">
                        <div class="form-group">
                            <label for="user-name--order" class="label-placeholder label-placeholder--name">
                                Введите имя
                            </label>
                            <input type="text" name="name" class="form-control" id="user-name--order" required>
                        </div>
                        <div class="form-group">
                            <label for="user-email--order" class="label-placeholder label-placeholder--email">
                                Ваш Email
                            </label>
                            <input type="email" name="email" class="form-control" id="user-email--order" required>
                        </div>
                    </div>
                    <div class="form-row d-flex flex-column flex-lg-row justify-content-between align-items-center">
                        <div class="form-group">
                            <label for="user-phone--order" class="label-placeholder label-placeholder--phone">
                                Номер Вашего телефона
                            </label>
                            <input type="tel" name="phone" class="form-control" id="user-phone--order" required>
                        </div>
                        <div class="form-group">
                            <label for="user-message--order" class="label-placeholder label-placeholder--message">
                                Текст сообщения
                            </label>
                            <textarea class="form-control" name="message" id="user-message--order" rows="1"></textarea>
                        </div>
                    </div>
                    <div class="text-right">
                        <button class="btn btn-primary">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="header-item">
            <div class="row">
                <div class="col-12 d-flex flex-column flex-xl-row justify-content-between align-items-center">
                    <a href="#" class="logo d-flex justify-content-center justify-content-sm-start mb-4 mb-xl-0">
                        <img src="images/icon/logo/logo.png" alt="logo">
                    </a>
                    <ul class="social-list list-unstyled d-flex mb-4 mb-xl-0">
                        <li class="social-list-item social-list-item--facebook mr-4">
                            <a href="#">
                                <svg width="20" height="20">
                                    <use xlink:href="#facebook-icon"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="social-list-item social-list-item--instagram">
                            <a href="#">
                                <svg width="20" height="20">
                                    <use xlink:href="#instagram-icon"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <ul class="email-list list-unstyled mb-4 mb-xl-0">
                        <li class="email-list-item">
                            <a href="mailto:tea@gmail.com" class="d-flex align-items-center text-light">
                                <svg width="20" height="20" class="mr-2">
                                    <use xlink:href="#email-icon"></use>
                                </svg>
                                tea@gmail.com
                            </a>
                        </li>
                    </ul>
                    <ul class="phone-list list-unstyled mb-4 mb-xl-0">
                        <li class="phone-list-item">
                            <a href="tel:+380991231212" class="d-flex align-items-center text-light">
                                <svg width="20" height="20" class="mr-2">
                                    <use xlink:href="#phone-icon"></use>
                                </svg>
                                +380 99 123 12 12
                            </a>
                        </li>
                    </ul>
                    <ul class="place-list list-unstyled">
                        <li class="place-list-item text-light text-center">
                            <svg width="20" height="20" class="mr-2">
                                <use xlink:href="#house-icon"></use>
                            </svg>
                            г.Запорожье просп.Соборный 150 индекс 69000
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>