import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { DiscountComponent } from './pages/discount/discount.component';
import { DiscountInfoComponent } from './pages/discount-info/discount-info.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { OffertaComponent } from './pages/offerta/offerta.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';




import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';





export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'discount', component: DiscountComponent },
  { path: 'product/:category', component: ProductComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'offerta', component: OffertaComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/category', component: AdminCategoryComponent },
  { path: 'admin/product', component: AdminProductComponent },
  { path: 'admin/discount', component: AdminDiscountComponent },
  { path: 'admin/news', component: AdminNewsComponent },
  { path: 'admin/order', component: AdminOrderComponent },
  { path: 'admin/category', pathMatch: 'full', redirectTo: 'category' }


];
@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  providers: [FormsModule],
  exports: [RouterModule, RouterLinkActive]
})
export class AppRoutingModule { }
