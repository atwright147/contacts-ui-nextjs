'use client';

import { useContactsStore } from '@/stores/contacts.store';
import styles from './ContactDetails.module.scss';
import { String } from '../../details/String/String';
import { Emails } from '../../details/Emails/Emails';
import { Addresses } from '../../details/Addresses/Addresses';
import { isoToLocaleString } from '../../../helpers/date/date.helper';
import { Favourite } from '../../Favourite/Favourite';
import { Comments } from '../../details/Comments/Comments';

export const ContactDetails = () => {
  const selected = useContactsStore(store => store.selected);

  return (
    <div>
      <h1>Contact Details</h1>

      {!selected && (
        <p>Please select a contact</p>
      )}

      {!!selected && (
        <>
          <div className={styles.detailItems}>
            <section className={styles.about}>
              <h2 className={styles.heading2}>About</h2>

              <div className={styles.name}>
                <String string={`${selected.firstName} ${selected.lastName}`} />
                <Favourite isFavourite={!!selected.isFavourite} />
              </div>

              <String string={selected.jobTitle} />
              <String string={isoToLocaleString(selected.dateOfBirth)} />
              <String string={selected.bio} />
            </section>

            <h2 className={styles.heading2}>Emails</h2>
            <Emails emails={selected.emails} />

            <h2 className={styles.heading2}>Addresses</h2>
            <Addresses addresses={selected.addresses} />

            <h2 className={styles.heading2}>Comments</h2>
            <Comments comments={selected.comments} />
          </div>
        </>
      )}
    </div>
  );
}

// <!-- async if else with empty object -->

// <ng-container *ngIf="(selected$ | async) as contact">
//   <div class="container">
//     <section class="head">
//       <img src="/api/v1/avatar/{{contact.id}}" alt="" class="avatar">

//       <div class="details">
//         <p class="name">{{contact.firstName}}&nbsp;{{contact.lastName}}</p>
//         <p class="email">{{contact.jobTitle}}</p>

//         <div class="buttons">
//           <app-button
//             type="button"
//             [motif]="Motifs.primary"
//           >
//             <mat-icon>forum</mat-icon>
//             Message
//           </app-button>

//           <app-button
//             type="button"
//             [icon]="true"
//           >
//             <mat-icon>phone</mat-icon>
//           </app-button>

//           <app-button
//             type="button"
//             [icon]="true"
//           >
//             <mat-icon>share</mat-icon>
//           </app-button>

//           <app-button
//             type="button"
//             [icon]="true"
//           >
//             <mat-icon>more_horiz</mat-icon>
//           </app-button>
//         </div>
//       </div>
//     </section>

//     <section class="detail-items">
//       <app-contact-details-item
//         [item]="contact.bio"
//         [type]="ItemType.STRING"
//         label="Bio"
//       ></app-contact-details-item>

//       <app-contact-details-item
//         [item]="contact.emails"
//         [type]="ItemType.EMAILS"
//         label="Emails"
//       ></app-contact-details-item>

//       <app-contact-details-item
//         [item]="contact.addresses"
//         [type]="ItemType.ADDRESSES"
//         label="Addresses"
//       ></app-contact-details-item>
//     </section>

//     <!--
//     <div class="detail-items">
//       <ContactDetailsItem label="Bio">
//         <ContactDetailsItemContent content={$contact.bio} />
//       </ContactDetailsItem>
//       <ContactDetailsItem label="Email">
//         <ContactDetailsItemContent content={$contact.emails} key="email" />
//       </ContactDetailsItem>
//       <ContactDetailsItem label="Address">
//         <ContactDetailsItemAddresses addresses={$contact.addresses} />
//       </ContactDetailsItem>
//       </div>
//     -->
//   </div>
// </ng-container>
