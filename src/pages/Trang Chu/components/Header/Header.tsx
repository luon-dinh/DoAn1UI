import React, { Component, useState } from 'react';
import { IonHeader, IonToolbar, IonSearchbar, IonTitle, IonIcon, IonButtons, IonButton, IonText, useIonViewDidEnter, withIonLifeCycle } from '@ionic/react';
import { cart } from 'ionicons/icons';
import './Header.css';
import { getArrayfromLocalStorage, putArraytoLocalStorage } from '../../../../util/cookie';
import { getCart, updateCartQuantity } from '../../../../util/cart';

export type SearchParam = {
    searchParam: string;
}

const Header:React.FC<SearchParam> = (props) =>{

    let searchParam = props.searchParam;
    let cartItems = getCart();
    updateCartQuantity(cartItems);
    const goToAnotherPage = (e: React.KeyboardEvent) =>{
        if(e.charCode == 13) {
            let name = String(document.getElementById("searchbar")?.getElementsByTagName("input")[0].value);    
            let names = [];
            names = getArrayfromLocalStorage("names");
            if(names == null) {
                names = [];
                if(name != "") {
                    names.push(name);
                }
            }
            else {
                if(name != null && name != "" && names.indexOf(name) == -1) {
                    names.push(name);
                }
            }
            console.log("names: " + names);
            putArraytoLocalStorage("names", names);
            window.location.replace("/timkiem/ketqua?name="+name);  
        }
    }
    return(
        <IonHeader class="header"> 
            <IonToolbar class="header_toolbar">
                <IonButtons>
                    <IonSearchbar id="searchbar" value={searchParam} color="black" class="header_searchbar" placeholder = "Nhập tên để tìm..." onKeyPress={e =>goToAnotherPage(e)}/>
                    <IonButton href="/donhang/giohang" ion-button item-end>
                        <IonIcon class="cart" icon={cart}>
                        </IonIcon>
                        <IonText id = "cart_count"></IonText>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
};

export default withIonLifeCycle(Header);
