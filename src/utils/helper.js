export function filterResturant(searchText, Restaurants) {
    return Restaurants.filter((restaurant) =>
      restaurant.card?.card?.info?.name
        .toLowerCase()
        ?.includes(searchText.toLowerCase())
    );
  }

