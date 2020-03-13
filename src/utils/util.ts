import { Product, Carousel, Blog, SubCategory, Category } from '@/types/types'

export const getProducts = () => {
  const products = Array<Product>();
  for(let i=1; i<=50; i++) {
    products.push({
      name: "Product" + i,
      price: Math.floor(Math.random() * 1000),
      imageLink: "https://bulma.io/images/placeholders/640x480.png",
      categoryId: Math.floor(Math.random() * 10) + 1,
      rating: parseFloat((Math.floor(Math.random() * (5 - 1 + 1)) + 1 + Math.random()).toFixed(1))
    })
  }
  return products;
}

export const getCategoryItems = () => {
  const categoryItems = Array<Category>();
  for(let i=1; i<=10; i++) {
    categoryItems.push({
      id: i,
      name: "Category" + i
    })
  }
  return categoryItems;
}

export const getSubCategoryItems = () => {
  const subCategoryItems = Array<SubCategory>();
  for(let i=1; i<=50; i++) {
    subCategoryItems.push({
      id: i,
      categoryId: Math.floor(Math.random() * 10) + 1,
      name: "Sub Category" + i
    })
  }
  return subCategoryItems;
}

const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const getBlogItems = () => {
  const blogItems = Array<Blog>();
  for(let i=1; i<=20; i++) {
    blogItems.push({
      title: "Blog Title" + i,
      description: "Blog Description" + i,
      dateAdded: randomDate(new Date(2020, 1, 1), new Date()),
      imageLink: "https://bulma.io/images/placeholders/640x480.png"
    })
  }
  return blogItems;
}

export const getCarouselItems = () => {
  const carouselItems = Array<Carousel>();
  for(let i=1; i<=5; i++) {
    carouselItems.push({
      title: "Carousel Title" + i,
      subTitle: "SubTitle" + i,
      description: "Carousel Description" + i,
      isFeatured: false
    })
  }
  return carouselItems;
}