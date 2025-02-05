export interface Order {
    customer: {
      _type: string;
      _ref: string;
    };
    orderDate: string;
    shippingAddress: string;
    orderTotal: number;
    orderItems: OrderItem[];
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  }
  
  export interface OrderItem {
    product: string;
    quantity: number;
    price: number;
  }
  export interface OrderWithMeta extends Order {
    _type: string;
  }  