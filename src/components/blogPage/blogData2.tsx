export interface BlogPost2 {
    id: number;
    title: string;
    date: string;
    comments: number;
    author: string;
    excerpt: string;
    image: string;
    
  }
  export interface RecentPost2 {
    id: number;
    title: string;
    date: string;
    image: string;
  }
  export interface MenuCategory2 {
    name: string;
    count: number;
    image: string;
  }
  export interface AuthorProfile2 {
    name: string;
    role: string;
    avatar: string;
    rating: number;
    reviews: number;
  }
  
  export const blogPosts2 = [
    {
      id: 1,
      title: "10 Reasons To Do A Digital Detox Challenge",
      excerpt:
        "Ut vero erat at accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: "/blogdetails/p1.png",
      date: "Feb 14, 2022",
      comments: 37,
      author: "Admin",
    },
    {
      id: 2,
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      excerpt:
        "Ut vero erat at accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      image: "/blogdetails/p2.png",
      date: "Feb 14, 2022",
      comments: 47,
      author: "Admin",
    },
    {
      id: 3,
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      excerpt:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat ",
        
      image: "/bloglist/p3.png",
      date: "Feb 14, 2022",
      comments: 47,
      author: "Admin",
    },
    {
      id: 4,
      title: "My Favorite Easy Black Pizza Toast Recipe",
      excerpt:
        "Ut vero erat at accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
        excerpt2:
        "Ut vero erat at accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",

      image: "/bloglist/p4.png",
      
      date: "Feb 14, 2022",
      comments: 47,
      author: "Admin",
    },
    // Add more blog posts...
  ];
  
  export const recentPosts2 = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      date: "June 24, 2020",
      image: "/bloglist/sidebar/p2.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      date: "June 24, 2020",
      image: "/bloglist/sidebar/p3.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      date: "June 24, 2020",
      image: "/bloglist/sidebar/p4.png",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      date: "June 24, 2020",
      image: "/bloglist/sidebar/p5.png",
    },
    // Add more recent posts...
  ];
  
  export const menuCategories2 = [
    { name: "Chicken Fry", count: 26, image: "/bloglist/sidebar/p6.png" },
    { name: "Burger Food", count: 45, image: "/bloglist/sidebar/p7.png" },
    { name: "Pizza", count: 15, image: "/bloglist/sidebar/p8.png" },
    { name: "Fresh Fruits", count: 36, image: "/bloglist/sidebar/p9.png" },
    { name: "Vegetables", count: 16, image: "/bloglist/sidebar/p10.png" },
  ];
  
  export const popularTags2 = [
    "Sandwich",
    "Tuna",
    "BBQ",
    "Restaurant",
    "Chicken Sharma",
    "Health",
    "Fastfood",
    "Food",
    "Pizza",
    "Burger",
    "Chicken",
  ];
  
  export const galleryImages2 = [
    "/bloglist/photogallery/p1.png",
    "/bloglist/photogallery/p2.png",
    "/bloglist/photogallery/p3.png",
    "/bloglist/photogallery/p4.png",
    "/bloglist/photogallery/p5.png",
    "/bloglist/photogallery/p6.png",
  ];
  
  export const authorProfile2 = {
    name: "Prince Miyako",
    role: "Blogger/Photographer",
    avatar:
      "/man-business-suit-emotions-different-surfaces 2.png?height=120&width=120",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis distinctio, odio eligendi suscipit reprehenderit atque",
    rating: 5,
    reviews: 1,
  };
  