

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    hamburgerMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const showMoreButton = document.querySelector('.showMore');
  const blogPost = document.querySelector('.blogPost');
  const hideButton = document.querySelector('.blogPost .hide');

  showMoreButton.addEventListener('click', function() {
      blogPost.style.display = 'block';
  });
  hideButton.addEventListener('click', function(){
      blogPost.style.display = 'none';
  })
});



//tranlations
let polishTranslations = ['Tam, gdzie Czystość Spotyka Wygodę - Twój Jedyny Sklep dla Błyszczących Przestrzeni!',
'Sklep Cleaning Shop specjalizuje się w dostarczaniu kompleksowego asortymentu środków czystości i wyposażenia zarówno do użytku domowego, jak i komercyjnego. Od ekologicznych rozwiązań czystości po sprzęt najwyższej jakości, firma zaspokaja zróżnicowane potrzeby klientów, którzy dbają o utrzymanie czystego i zdrowego otoczenia.',

'Bogata Oferta Produktów', 'Cleaning Shop wyróżnia się szerokim wyborem wysokiej jakości środków czystości, narzędzi i akcesoriów do sprzątania, dostosowanych zarówno do potrzeb klientów indywidualnych, jak i biznesowych.', 'Zrównoważone Rozwiązania', 'Firma skupia się na oferowaniu produktów przyjaznych dla środowiska, dostarczając ekologiczne środki czystości, co pozwala klientom dbać o czystość swojego otoczenia w sposób odpowiedzialny.', 'Profesjonalna Obsługa Klienta', 'Cleaning Shop wyróżnia się profesjonalnym podejściem do obsługi klienta, oferując porady dotyczące doboru produktów, praktyczne wskazówki dotyczące sprzątania oraz zapewniając wsparcie w wyborze najlepszych rozwiązań do konkretnych potrzeb.']



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".animation");
  
    function checkVisibility() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add("show");
        }
      });
    }
  
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
  
    // Initial check
    checkVisibility();
  });


  //about us - translation

  const aboutUsTranPL = ['O nas', 'Witajcie w świecie Cleaning Shop, gdzie nasza pasja do czystości stała się fundamentem naszego istnienia. Założona z miłości do sprzątania, nasza firma zrodziła się z pragnienia stworzenia miejsca, w którym każdy może znaleźć wysokiej jakości produkty do utrzymania czystości i profesjonalne akcesoria, które ułatwią codzienną walkę z bałaganem.', 'Początki', 'Cleaning Shop powstała z inspiracji, jaką stanowiły wyzwania związane z utrzymaniem czystości w dzisiejszym szybkim tempie życia. Zauważyliśmy, że istnieje potrzeba dostępu do skutecznych, ekologicznych środków czystości, a także narzędzi ułatwiających utrzymanie porządku. Z tej potrzeby wynikła idea stworzenia miejsca, które nie tylko dostarczałoby wysokiej jakości produkty, ale także inspirujące porady i rozwiązania dla wszystkich, którzy pragną utrzymać swoje otoczenie w nieskazitelnej czystości.', 'Misja', 'Nasza misja w Cleaning Shop jest jasna - dostarczyć naszym klientom nie tylko produkty najwyższej jakości, ale także służyć jako źródło wiedzy i inspiracji w dziedzinie utrzymania czystości. Chcemy być partnerem w codziennych wysiłkach każdego, kto ceni sobie świeżość i porządek.  Wierzymy w zrównoważony rozwój, dlatego dbamy o to, aby nasze produkty były nie tylko skuteczne, ale także przyjazne dla środowiska. Chcemy inspirować do podejmowania prostych, ale skutecznych działań, które przyczyniają się do poprawy jakości życia i środowiska.', 'Razem dla Czystości', 'Jesteśmy dumni z tego, co osiągnęliśmy, ale zawsze dążymy do doskonałości. Razem z naszymi klientami, partnerami i zespołem, pragniemy tworzyć społeczność zjednoczoną wspólną pasją do czystości. Cieszymy się, że możemy być częścią tej podróży, pomagając w każdym kroku na drodze do świeżego, czystego i zdrowego otoczenia. Dołącz do nas w Cleaning Shop i razem sprawmy, aby czystość stała się prostszą, przyjemniejszą i bardziej dostępną częścią naszego życia codziennego.'];
