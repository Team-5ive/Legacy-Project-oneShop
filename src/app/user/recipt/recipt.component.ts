import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { VariablesService } from "./../../variables.service";
import * as jsPDF from "jspdf";
@Component({
  selector: "app-recipt",
  templateUrl: "./recipt.component.html",
  styleUrls: ["./recipt.component.scss"]
})
export class ReciptComponent implements OnInit {
  obj;

  @ViewChild("content", { static: false }) content: ElementRef;

  constructor(private variable: VariablesService) {}

  ngOnInit() {
    this.obj = JSON.parse(this.variable.checkoutInfo);
    console.log(this.obj);
  }

  downloadPDF() {
    let doc = new jsPDF();

    let specialElementsHandlers = {
      "#editor": function(element, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementntHandlers: specialElementsHandlers
    });
    doc.save("recipt.pdf");
  }
}
