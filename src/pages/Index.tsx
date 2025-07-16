import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">ПромНасосы</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#products" className="text-gray-600 hover:text-primary transition-colors">Продукция</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Профессиональные плунжерные насосы
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Продажа и техническое обслуживание высококачественного насосного оборудования для промышленности
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline">
                  Техподдержка
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/05b6d0b5-85bf-48fe-9aba-8e454bd97426.jpg" 
                alt="Плунжерный насос" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы специализируемся на продаже и техническом обслуживании плунжерных насосов для промышленных предприятий
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Высокое качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Работаем только с проверенными производителями насосного оборудования
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Settings" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Техническая поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Полный цикл обслуживания: от консультации до ремонта и модернизации
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Оперативность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Быстрая диагностика, качественный ремонт и своевременная поставка запчастей
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша продукция</h2>
            <p className="text-xl text-gray-600">
              Широкий ассортимент плунжерных насосов для различных отраслей промышленности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <img 
                  src="/img/50323b93-0550-4324-87ee-382504f207ce.jpg" 
                  alt="Высокодавления насос" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Насосы высокого давления</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Для работы с давлением до 1000 бар. Идеально подходят для промышленной мойки и гидроиспытаний.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">от 150 000 ₽</span>
                  <Button variant="outline" size="sm">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img 
                  src="/img/05b6d0b5-85bf-48fe-9aba-8e454bd97426.jpg" 
                  alt="Дозировочный насос" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Дозировочные насосы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Точное дозирование химических реагентов. Высокая точность и надежность работы.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">от 85 000 ₽</span>
                  <Button variant="outline" size="sm">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img 
                  src="/img/c25eb2bd-6440-48cd-8e6a-f71ecbc2215f.jpg" 
                  alt="Промышленный насос" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Промышленные насосы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Для работы в тяжелых условиях. Повышенная износостойкость и долговечность.
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">от 220 000 ₽</span>
                  <Button variant="outline" size="sm">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для консультации и заказа оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши контакты</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@promnasosi.ru</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Промышленная, д. 15</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Написать нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <Textarea placeholder="Опишите ваш запрос" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">ПромНасосы</h3>
              </div>
              <p className="text-gray-400">
                Профессиональные решения в области насосного оборудования
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Насосы высокого давления</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дозировочные насосы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Промышленные насосы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Запчасти</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Продажа оборудования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Техническое обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт насосов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@promnasosi.ru</p>
                <p>г. Москва, ул. Промышленная, д. 15</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ПромНасосы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;