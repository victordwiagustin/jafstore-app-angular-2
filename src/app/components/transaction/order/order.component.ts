import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { OrderItemService } from '../../../services/order-item.service';
import { OrderItem } from '../../../model/order-item';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../model/member';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderShow: boolean = false

  orderItem: OrderItem = new OrderItem()

  members: Member[] = []
  items: Item[] = []

  orderArr: OrderItem[] = []

  memberTemp: any

  constructor(
    private router: Router,
    private alertService: AlertService,
    private orderItemService: OrderItemService,
    private memberService: MemberService,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.onLoadMember()
    this.onLoadItem()

  }

  onLoadMember() {
    this.memberService.loadAll().subscribe(
      output => {
        this.members = output
      }, error => {
        console.log("error load member\n" + error)
      }
    )
  }

  onLoadItem() {
    this.itemService.loadAll().subscribe(
      output => {
        this.items = output
      }, error => {
        console.log("error load item\n" + error)
      }
    )
  }
  
  goToOrder() {
    this.orderShow = true
  }

  addItemCart() {
    this.memberTemp = this.orderItem.member
    this.orderArr.push(this.orderItem)
    console.log(this.orderArr)
    this.orderItem = new OrderItem()
    this.orderItem.member = this.memberTemp
  }

  onSaveOrder() {
    this.orderItemService.save(
      // save array object
      this.orderArr
    ).subscribe(
      success => {
        console.log(success)
        this.orderArr = []
        this.orderItem = new OrderItem()
        this.alertService.success('Order Item for ' + this.memberTemp.name + ' success', true)
        this.orderShow = false
        this.router.navigate(['/order'])
      }, error => {
        console.log(error + '\nSomething wrong')
        this.orderArr = []
        this.alertService.error('Order Item for ' + this.memberTemp.name + ' failed', true)
        this.router.navigate(['/order'])
      }
    )
  }
}
