import { TutorialService } from 'src/app/services/tutorial.service';
import { uye } from './../models/uye';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from '../models/sonuc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
secuye:uye= new uye;
sonuc:Sonuc= new Sonuc;
  constructor(public fbservis:TutorialService,
    public router : Router) { }

  ngOnInit(): void {
  }
  KayitYap() {
    this.fbservis.UyeEkle(this.secuye).then(d => {
      d.user.updateProfile({
        displayName: this.secuye.adsoyad
      }).then();
      this.secuye.uid = d.user.uid;
      localStorage.setItem("user", JSON.stringify(d.user));
      this.UyeEkle();
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu Tekrar Deneyiniz!";
    });
  }
  UyeEkle() {
    this.fbservis.uyeEkle(this.secuye).then(d => {
      this.router.navigate(['/']);
    });
  }
}
