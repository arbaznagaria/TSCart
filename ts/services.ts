export class service{
    service(url: string) {
        return fetch(url)
            .then(response => {
            return response.json()
        })
        .then((data) => {
            return data.products;
        })
    }
}