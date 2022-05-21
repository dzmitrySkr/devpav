import { useEffect, useState } from "react";
import "../Styles/bookcomp.css";

function BookComp({ item, come, setFavorite, setTextbook, modal, setModal }) {
  let [count, setCount] = useState(0);
  let [disable, setDisabled] = useState(false);

  //remember favorite books in localstore
  let setToFavorite = (item) => {
    if (localStorage.getItem("MyBooks")) {
      localStorage.setItem(
        "MyBooks",
        JSON.stringify([...JSON.parse(localStorage.getItem("MyBooks")), item])
      );
    } else {
      localStorage.setItem("MyBooks", JSON.stringify([item]));
    }
    setCount(count + 1);
  };

  //delete books from Localstore
  let delFromLS = (item) => {
    let ls = JSON.parse(localStorage.getItem("MyBooks"));
    let newls = ls.filter((i) => i.id !== item.id);
    localStorage.setItem("MyBooks", JSON.stringify(newls));
    setFavorite(newls);
  };

  // function for open modal window and get info to the modal (setText)
  let read = (item) => {
    setTextbook(item);
    setModal(!modal);
  };

  //render window and disable buttons if have same book in LocalStore
  useEffect(() => {
    localStorage.getItem("MyBooks") &&
      JSON.parse(localStorage.getItem("MyBooks")).forEach((i) => {
        i.id === item.id && setDisabled(true);
      });
  }, [count]);

  return (
    <>
      <div className="book">
        <p className="item_title">{item.title}</p>
        <div onClick={() => read(item)}>
          <img
            src={
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhgSFhISGBgYEhgZEhgYGBEYGhgVGRUZGRgVGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISGjQhJCQ0NDExMTQ0NDE0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOAA4AMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIFAwQGB//EADsQAAIBAgMECQIEBQMFAAAAAAECAAMRBBIhBTFBUQYTIjJhcXKBsZGhFELB0VJikuHwByNDJDOCorL/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EAC4RAAICAQQCAAUEAQUBAAAAAAABAgMRBBIhMQVBEyIyUXFhgZGx8BRCUqHhBv/aAAwDAQACEQMRAD8AwQhCdJ7QI4oGAF4ryUUEivC8cIGRXheOEDIrx3hFAHeK8dpv4fZFdhdabW8bj6Xmuy2Ff1ySMZTjH6ngr7wvLVtgYkf8ZPkRMdTY+IUXNNreGv2E1rV0S6mv5MPj1/8AJfyV147xsLaH3im9cmzOQvC8ISSRXheOEDIrwvHCBkV47whGQF5Cr3T6W+JIxVe6fS3xIIfRKEISQEDCBgDijigBCEIAQhFAHFaEz08M5UsEYgbyASBMXJLlvBDajy2X3RbCIQ1Ui7K1lvuGgJM6gnxnK9EqpzOh3FQw9rA/M6sCeD85Kz/VyUnwUurT+K8gqeUllklElKPd9jlyVuP2XSq95dbaMNGH7zi9qbOai2U6j8jcx+89FtK3a+AFWmU4718DL/xPl7KZqFjzH+jq02olXLGco8+jmSvRZWKsCCN4mO091FqSzHku09yyghCEkBCEIAQhCQwBkavdb0t8SRkavdb0t8QH0ShCEkBAwgYA4o4oAQhCAELQlnsDC56ovuXtHx5TTfbGmuU5ejGc1CLk/RYbH2ECoeoPJN3uxnRUaQXQAAchoJmVZPLPnmr8jdqJuUpcekUVt0rHmTNCjs1EqGqgtdbFRu37xN6gQRcSYEkFnFZdKx5m8s1uTfZB3I3C8krgyQiZQZqyjElIuLwtBTIQK7H7Op1O8oJG47vvOYxmz0DFcrIwOl9QZ2ziamIpK3eAPIy203krqcfM+DbXbKD7PO2W2kQnQbe2UReqtitu2OI8fKc/ae80ephqaVZF5+5d1WKyOUEIQnUbQhCEhgDI1e63pb4kjI1e63pb4gPolCEJICBhAwBxRxQAhCEAlSpliFG8kAec7rZOBShT3DMe+3M/tON2ebVFPnbzsZ0KZq6ikrlQAM7bzY77eJnl/P2Tk41J4j2yu1suVH0Wg2tSzZQ1yN9tbfSb9OoGFwZrYHA06aBEQAD6nxJ4mZWwutwbTyVnw84j/wB/5wVz2myI5rKzrvAPiP2mZXBmpxaMWicIoTEgchbhJyJMIkw02a1m38xFUkmax84nE2fqSVe0LhTxBFv7Tk9oYTq3te4IuPKdliqdwQeO6cntpmL9rgth+89N4C5q3Ynw10d+jl82CtMIQnsi0CEISGBGKr3T6W+IzI1e4fSfiA+icIQkgIGEDAHFHFACEISAZKLWYHxEMdtGrhn61LsLjOu4MAd3nILOpwGzQyg1F3Wsp19zKDzMoVuFkllcrBxavCxn2XezsUKlNai3syg2O8X4GboM0TSyC6DS3dkqOKU+fETxM47m3FcFU1no3CYmQGCsGEBymrkxANHeBiPOAOKO8JAMVQXGkjfOn+b5lcaTEtgbc5sXRKNUEsLHeN8pNr4TMtxvE6BxqR/luU1MTTBF/CdmmvlTYpx7RthLbJNHCmRvNzaNHK5tuOo/UTTn0ai6NsFOPsvITU4pocIQm1mQGRq91vS3xJGRq91vS3xAfRKEISQEDCBgDijigBCEUgDRrG/I6Tsti4rrR5d4eM5fBYJqrZVF+Z4AX3kzqtkYb8OpVyDdgbjTW1rTzn/0EqXUo5+f0jg1rg1j2i8XlNarTAOtrfE2FIMT23GeLTaZVrKNR8Oy9tGubbidCJLD4sMNQVcb1O+SBKm28cPDwir0UffoRuI3ibMp8S/ky/JsK9xce8eYGVNSu9JhmGnFhexH7zdz3GddfCRKvHJDjgzI3CNnmsaoYXG8cI0q5hy898jYTgKeM7RRtGHA8RzEKrcRzmpjKea2oDDusbfTyMeGqlhY6EaMNdJt+GsbomW1Yyjbq77+EwN7azKToJrO2pX3ExihE5za9PtMCNRqP1lOZ021Ezp1g3re/lx85zU9p4PUbq3W/RZaOXG0UIQl8ztAyNXut6W+JIyNXut6W+ID6JQhCSAgYQgDijigCMkBImbGDKiopbdmF/K8xnLbBv7Ixk8Js6/YuE6ukFt2iAX8SZZpTvvkUqA6gg+UzKZ8x1N0rbJTl22UEm5PLNVsJl1RivPiPpINjipKujD+Yag/TdN0tMZI1M1qWfqWQmaxrow7LAyNLEa5CQDwvxmhiKSYg5iOwugtpc8TfwnGbSxtV6vVYPMyr3mN2Ab+Wd+n0bveyPf9flmxJY5PSKjAgo40I9po4d+qbLe6Huk3+l5zWz9s7QoKFxFDrEG9l0Ye24y4XbOCqiwqBGO9XFiD4gxZobqMxnHK/TlGMcfsW9ejmAZTr8yrqYnI4O4k2YNz5iFLFPQNyc9PgV1I8+Ym1XSniKd1INx4aTSo7Pq5i/Zmlh8mWo11zDf7TSZyDmNxbQ+I4TU/EmiQr7uDcLcPebBdX7vHf/eZKDj+H7JUcFor3WY6w1Dct81sM9kAJvMtSpcTVt2swa5KrE1stYIT2ain+pe8PcGUmMpZXZeF7jyIlv0gQWpvxSqCPI6H9Jo7VN2U818tL8pf+Ili+DX+5NP9v/Dr0zxJFfCBiE9cWYzI1e63pb4kjI1O63pb4gPpjvC8ISTILwvCEAYhEI4MQklOt5GSpLcgczaYzeIt/o/6Eujttl0giAb766+PCb+aVmFrg3A/Lpb9ZuI958yui97b+5QPs2A0pNvY/KOrDEFt50Fl4m8tXqWE4TalAYvGKma6AqHtuOu4zp8dpvjXLPRlBY5fo38IK2NtTw4KURo1WxGYfwp+87jY3R6lh0CKo8Tzm7hKVOlTCrlVVWw4WA8ZX47pNhqalutDW3hRm9tJ7bTaSFEcRX7nFOdlzxBZRaPg0IsVEqsd0Zw9TvU1+gmPZPS/C19A+Vv4W0P3nQI4OonT+TVKNlbxJNM4ir0HVTelWqU/Sxt/TulNiejW0KJL064biQUGvnaeoMQJV7Q2zhaX/crU18Cwv9Jonpqp/VEzhfb0uTy/GbXxaDLXw6sOJXT7GVeH6QBSWQsLb1YHL9eE9DxW2tn1uz1qeZtacZtPCUkdwmV1dOyVsbH2nHPx9Mc4XZ3wnZ7jg6Whic1Om38Sgj3E2TVsv6yh2ZXsiDIbqoFvEC1tJZ1qx6skgqTw5Ty9tWJYXWTZJYI49gaZvxGnzf7St2gwutjfszFi8V/s311a1/DdMdZ7njoANZaeMqavi/tk6KF86MRgI4hPXeixGZGp3T6W+JKQrd0+lviB6JQhCDIIQhAARxCODEI1OsUJjjKwCy2JjCXdTvGUgHlredLRqXE4yjUytm8PtOlwlYFQQeE8V5XSfBt46ZU6ivZIzbXxOSm3keW88pqbAwS4eg2IcE6XHMmamMZq1YU1GiKXfjyA/WdlW2atTD9VuGUay08JpdsPiS9nNOcY7YyfDfJ5ntjb2LqsbsAp7qDUAePMytSrUylese3EDQfS06HH9E8QHy5L3aysDx5nlpHR6M4tWNNnKqUzNb+G9t53T0CieghdpK4fI1+MlJhMMxYFTc/lJ3g7xYz2bZN+qW9+6D9RqJyvR3o4gqOW/wCNwtt9zYG9/fdO1pqBoInjGEUXltVXdJRguvf5OL/1J2y9GklOmSGcm7Dh4Ty+jgO1mcMx3nMbEjwvPYOlWylxBybmCZkPJrzzva2Eq07o1M3Fs2hPkwbkdfpMFBPlnZ4hUuGH9RzuJcLuBHIHX7yz6FUc9Y3HZuDbxlXUpGoe6fGd50T2J1SLUIsWdRbwmiUdzz6OnyDag+ePRi29hurqAKSpIJGpudYq2Ib8OrN2uzYEzF/qVVzYnDUKRIq3a+m5GsL/AGMw7dqCmiUw2iLr7DUyj1tOLope3n+Crpt3w5XRV4rElmSmCdO0f0m6hO8nfKnZqM5NQ72OngvKXEsvH0Yk5Y64/f2d+ljlZCEIS3OwJjq90+lviZJjq90+lviQT6JwhCSSEIQgAI4hHBiERjhIATLh8aUVlI3bjfnMMw4mhnW2bKeB3zi12kWogvujRdVvRfdBtoI2IbNa7got+S/O/wC077A1NLcjb6Tx4l6dJctuspjMhF+0Rc399RPSujuM62klS986K31EjRcQcGsYPP6utqfJabWcqEcHuVUuOYbsn5+0x7Tw+eo6ZiM2FYLbnnH33TNjKBqU2TiR2T/MNR9wJho4wO1BzpnV0I5MACR53Uzr6NMH8uV6yYuj2KDtUI/MtN7epbH/AOZeU+PnOR2GDh6lQuGyLTyFrX7lQ208Q06fA4tKiZ0a44+B5GRPsnUxSseP0NJdcS/kLeUnWpL163A7dNgfNWBHy0h+KpjF9XcZmQG3lMm0nyvSc7g5UnlnWwv4XtCZri3kqa+xsOMSt6a2dGI0Fg6EX+ob7TFtnEKmRbhQHFzwAE39pv8A9RQHhVJ9got95ynS6rmsuttSQNSRyH0iT4NznOaW5t8HO4nbH4naBqgDLTUpTPMX1a8rts1+tqCmp43cjlymlSxisztSQqptv4DdfzPKXGEwQRczd99b8h4yhuTd+72+EWNMMpJGTD0wq6crDymYQhL6mtV1qKLiMdscDihCbCQmOr3T6W+JlmOr3T6W+JJPolCEIJCOKEABHAQgxCEIQAiMcDAIvTzC3+A850/Q3EZU6s/lOnLKTp5TmZtYDF9W4fhubymGxZ3HDrqFZW2u0epUWmltdFUUqgFhTxKk25PdSf8A2i2fiw6ggzaxWFWtTamxIV1sbGxHiDwMho85B7ZFbRxTjHNRYHIyswNtD3dAfDWS2xsJnF6FXqm/Na5BHiLzQr4TFVEDrUp9dh6jquhIcZcpDciRY+c3cFgsW9NWerTzMLtlUgAHdax1kM32YaUk0scGDYHRtaD9a1RqlQ73bUn7yz202lIEaHEU833I+9pr16eIRgqFHv7W8TMO3TUWigYgsa1PdzzA6fSEa45c028mHbFa2KQ/w0an1Lr+wlB1fWYix4A399JtY6vnxDNwSmF92Yt8CbnR3BEhqpHeOnlIfJsfyxX4PP8A8AtCs6EWAb/bHO83BzO//NJfdKMABUFW2pBUnw4ShmijSKE3ZnOS80W2VakEVo4TtO4IQhIYCQqd0+lviZJjqd0+lviST6JwhCSAiMcUAYhEI5BAQhCAEIQgBFHFALfYe1jSYU3PZ/Kf0M7/AAVfMARPKiAdJu9H+lbUG6qt3QbK/wChmLRQ+R0ii90fZ3H4Mri3TOwWsmdbHVXWyv5ggp9DMuC2fiabtSGJXqwoNMFQXGpzAm+7dbSae0NrU8iYpCGFNrvaxPVsLP8ATQ+03W2jT/EJ21Jei2S35gGU3H1mBwtOST/zg2cNgXRy7VC5POVHSbFgVKSncud2/wDEWH3b7Tcxu2qaAjOL+YnItiTia5C6g2F+AUfufiQ2Y1RedzM+y8G9Y23BmzOfDgPpO4o4cIoUDQCY9l4BaaW48fEzcYQuDGye5lFtrBB0InBYvCsjWPsZ6hiV0+Z5ptXFZ6jEd3Mco4acZtiWXinNyaXSNKEcUkvghCEgBIVO6fS3xJyFTun0t8SQ+icIQkkhFHFAARxCOQQEIQgBCEIAQhFAHNbEYYPe43j7zYgYNGpq+JXgpwtdFPVubEEMp3W4iaaYvFDqwA5NO4pm5uFa108p0+HsGBIFj9jxnTYHBUzbQTTKPJQNuJxeC2fi8Qe12RxnpnRrY6UEAsLzawWDUbgJaoklRSOeyxtYMojMBAzE0lP0ixPV4d24lco8zpPMTO26d4myJTHElj5Dd8ziTN0ej0Xi68U7n7JRQhJLIIQhACQqd1vSfiTkKndPpb4gPonCEJJIRRwMAQjiEcggIQhACEIQAhCEAciI4iIBmoAE5TuO/wADwl1s5nptlJ04SgBnWbMRa1MH8w0PmJjJeym19Oz510X+Ar3lsrTlMI7I4U+U6Wg2kx9FPNYZsgwkFMoek23VooaaG7sP6RzPjIwKqpWyUIrs5XpRjutxLWPZXsr7HX7yljhNq4PXVVquCgvQQhCDMIQhAFIVO6fS3xJyFTun0t8QH0f/2Q==" &&
              item.resources.find((item) => {
                if (item.uri.includes("medium")) {
                  return item.uri;
                }
              }).uri
            }
            alt={item.title}
          />
        </div>

        <div className="buttons">
          <button onClick={() => read(item)}>Read</button>
          {come ? (
            <button onClick={() => delFromLS(item)}> Delete </button>
          ) : (
            <button onClick={() => setToFavorite(item)} disabled={disable}>
              {" "}
              Favorite{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default BookComp;
