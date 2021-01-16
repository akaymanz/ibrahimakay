import { Kayit } from './../models/kayit';
import { uye } from './../models/uye';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Tutorial from '../models/tutorial';
import {AngularFireAuth} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  

  private dbPath = '/tutorials';
  private dbKayit='kayitlar';
  private dbUye='/uyeler';
  KayitRef:AngularFireList<Kayit> = null;
  UyeRef:AngularFireList<uye> = null;

  tutorialsRef: AngularFireList<Tutorial> = null;

  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
    this.tutorialsRef = db.list(this.dbPath);
    this.KayitRef=db.list(this.dbKayit);
    this.UyeRef=db.list(this.dbUye)

  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  uyeEkle(Uye:uye){
    return this.UyeRef.push(Uye)
  }
  OturumAc(mail:string,parola:string){
    return this.afAuth.signInWithEmailAndPassword(mail,parola);
    
  }
  OturumKapat(){
    return this.afAuth.signOut();
  }
  UyeEkle(uye:uye){
    return this.afAuth.createUserWithEmailAndPassword(uye.mail,uye.parola);
  }
  getAll(): AngularFireList<Tutorial> {
    return this.tutorialsRef;
  }

  create(tutorial: Tutorial): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
}
