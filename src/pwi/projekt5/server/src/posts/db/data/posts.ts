import { Post } from '../../model/Post';

export const posts: Post[] = [
  {
    id: 1,
    lang: 'pl',
    url: '#',
    img: './img/mapa1.png',
    imgAlt: 'mapa poglądowa WMS',
    title: 'Web Map Service (WMS)',
    description:
      'Stworzony przez Open Geospatial Consortium (OGC) standard udostępniania w Internecie danych geograficznych (map) w postaci rastrowej',
    content: [
      'Zasada działania',
      'W celu wyświetlenia map użytkownik łączy się z serwerem WMS przy pomocy klienta WMS (najczęściej jest to specjalny program). Klient pobiera z serwera metadane, w których znajduje się lista dostępnych warstw, obsługiwane formaty, systemy współrzędnych itp. Użytkownik wybiera interesujące go warstwy, a program wysyła do serwera zapytanie o gotowy wycinek mapy o zadanych wymiarach i położeniu.',
      'Wersje',
      'Pierwszą wersję standardu WMS (1.0.0) OGC wydało w kwietniu 2000 roku[3], kolejną (1.1.0) - w czerwcu 2001[4]. Trzecia wersja (1.1.1) wydana została w styczniu 2002[5]. Najnowsza wersja 1.3.0 wydana została w marcu 2006 roku[6]; jest to ten sam dokument, co ISO 19128[7].',
      'Klient WMS może dowiedzieć się od serwera, które wersje protokołu obsługuje. Służy do tego zapytanie GetCapabilities. Jeśli w zapytaniu: nie podano numeru wersji lub numer wersji jest nieznany serwerowi i jednocześnie wyższy niż najniższy znany serwerowi to serwer odpowiada podając najwyższy mniejszy od podanego wspierany numer (lub po prostu najwyższy). Jeśli numer wersji jest nieznany serwerowi i jednocześnie niższy niż najniższy znany serwerowi to serwer odpowiada podając najniższy wspierany numer.',
      'Odpowiedź na zapytanie',
      'Odpowiedzią na poprawne zapytanie GetMap jest rastrowy obraz mapy, składający się z podanych warstw w zadanych stylach, w określonym układzie współrzędnych, o granicach określonych prostokątem ograniczającym, w podanym formacie i z określoną przezroczystością.',
      'Jeśli zapytanie było niepoprawne, odpowiedzią jest wyjątek z informacją o błędzie, w podanym formacie.',
    ],
  },

  {
    id: 2,
    lang: 'en',
    url: '#',
    img: './img/mapa1.png',
    imgAlt: 'WMS overview map',
    title: 'Web Map Service (WMS)',
    description:
      'Created by the Open Geospatial Consortium (OGC), a standard for sharing geographic data (maps) in raster form on the Internet',
    content: [
      'Principle of operation',
      'In order to display the maps, the user connects to the WMS server using the WMS client (usually a special program). The client downloads from the server metadata, which includes a list of available layers, supported formats, coordinate systems, etc. The user selects the layers he is interested in, and the program sends a query to the server for a ready map section with given dimensions and location. ',
      'Versions',
      'The first version of the WMS standard (1.0.0) was released by OGC in April 2000 [3], the next one (1.1.0) - in June 2001 [4]. The third version (1.1.1) was released in January 2002 [5]. The newest version 1.3.0 was released in March 2006 [6]; it is the same document as ISO 19128 [7]. ',
      'The WMS client can find out from the server which protocol versions it supports. The GetCapabilities query is used for this. If in the query: no version number was given or the version number is unknown to the server and at the same time higher than the lowest known to the server, the server responds with the highest, lower than the given supported number (or simply the highest). If the version number is unknown to the server and at the same time lower than the lowest known to the server, the server replies with the lowest supported number. ',
      'Answer for question',
      'The answer to a correct GetMap query is a raster map image, consisting of given layers in given styles, in a specified coordinate system, with boundaries defined by a bounding rectangle, in a given format and with a specified transparency.',
      'If the query was incorrect, the response is an exception with an error message in the given format.',
    ],
  },

  {
    id: 3,
    lang: 'pl',
    url: '#',
    img: './img/mapa2.png',
    imgAlt: 'mapa poglądowa WMTS',
    title: 'Web Map Tile Service (WMTS)',
    description:
      'Standardowy protokół do obsługi wstępnie renderowanych lub obliczonych w czasie wykonywania kafelków map georeferencyjnych przez Internet.  Specyfikacja została opracowana i po raz pierwszy opublikowana przez Open Geospatial Consortium w 2010 roku',
    content: [
      'Web Map Tile Service (WMTS) to standardowy protokół do obsługi wstępnie renderowanych lub obliczonych kafelków map georeferencyjnych w czasie wykonywania przez Internet. Specyfikacja została opracowana i po raz pierwszy opublikowana przez Open Geospatial Consortium w 2010 r.',
      'Historia',
      'Otwarte Konsorcjum Geoprzestrzenne (OGC) zaangażowało się w opracowywanie standardów mapowania internetowego po tym, jak w 1997 r. Allan Doyle opublikował artykuł opisujący „WWW Mapping Framework”. [3] Najstarszym i najpopularniejszym standardem tworzenia map internetowych jest WMS. Jednak właściwości tego standardu okazały się trudne do wdrożenia w sytuacjach, w których ważne były krótkie czasy odpowiedzi. W przypadku większości usług WMS często zdarza się, że uzyskanie odpowiedzi wymaga co najmniej 1 sekundy procesora. W przypadku masowych zastosowań równoległych taka usługa intensywnie wykorzystująca procesor jest niepraktyczna.',
      'Aby przezwyciężyć problem intensywnego renderowania w locie, wymagającego dużej mocy obliczeniowej procesora, twórcy aplikacji zaczęli używać wstępnie renderowanych kafelków map. Wymyślono kilka otwartych i prawnie zastrzeżonych schematów, aby uporządkować i rozwiązać te kafelki mapy. Wcześniejszą specyfikacją jest usługa map kafelkowych (TMS). Jest prostszy niż WMTS. Został opracowany przez członków OSGeo i nie jest wspierany przez oficjalny organ normalizacyjny.',
      'Upraszanie',
      'WMTS określa liczbę kodowań żądań:',
      'Kodowanie par klucz-wartość-wartość KVP (przez HTTP)',
      'Reprezentacyjne kodowanie transferu stanu REST (przez HTTP)',
      'Kodowanie protokołu SOAP Simple Object Access Protocol (zwykle przez HTTP) Składnia typów żądań WMTS jest inna dla każdego z tych kodowań. Niektóre typy żądań to: ',
      'Możliwości zwraca informacje o parametrach usługi WMTS',
      'Kafelek zwraca kafelek mapy',
      'FeatureInfo zwraca (alfanumeryczne) informacje dla danej lokalizacji na mapie',
      'Legenda zwraca obraz legendy dla mapy',
    ],
  },

  {
    id: 4,
    lang: 'en',
    url: '#',
    img: './img/mapa2.png',
    imgAlt: 'WMTS overview map',
    title: 'Web Map Tile Service (WMTS)',
    description:
      'Standard protocol for handling pre-rendered or runtime computed georeferenced map tiles over the Internet. The specification was developed and first published by the Open Geospatial Consortium in 2010',
    content: [
      'A Web Map Tile Service (WMTS) is a standard protocol for serving pre-rendered or run-time computed georeferenced map tiles over the Internet. The specification was developed and first published by the Open Geospatial Consortium in 2010.[1]',
      'History',
      'The Open Geospatial Consortium (OGC) became involved in developing standards for web mapping after a paper was published in 1997 by Allan Doyle, outlining a "WWW Mapping Framework".[3] The oldest and most popular standard for web mapping is WMS. However, the properties of this standard proved to be difficult to implement for situations where short response times were important. For most WMS services it is not uncommon to require 1 or more CPU seconds to produce a response. For massive parallel use cases, such a CPU-intensive service is not practical.',
      'To overcome the CPU intensive on-the-fly rendering problem, application developers started using pre-rendered map tiles. Several open and proprietary schemes were invented to organize and address these map tiles. An earlier specification for this is the Tile Map Service (TMS). It is simpler than WMTS. It was developed by members of the OSGeo and is not backed by an official standards body.',
      'Requests',
      'WMTS specifies a number of request encodings:',
      'KVP key-value-pairs encoding (over HTTP)',
      'REST Representational state transfer encoding (over HTTP)',
      'SOAP Simple Object Access Protocol encoding (usually over HTTP) The syntax for the WMTS request types is different for each of these encodings. Some request types are:',
      'Capabilities returns information about the WMTS service parameters',
      'Tile returns a map tile',
      'FeatureInfo returns (alphanumeric) information for a given map location',
      'Legend returns a legend image for the map',
    ],
  },
];
