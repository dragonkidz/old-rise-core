import { defineCollection } from './helpers.js';

export const Trs = defineCollection('trs', new SimpleSchema({
    timestamp: {
        type: Date,
        autoValue: () => {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return { $setOnInsert: new Date() };
            } else {
                this.unset();
            }
        }
    },
    // TODO: Autovalue (Total count of items in Trs Collection +1)
    rowId: {
        type: Number
    },
    // TODO: Validate that the id exists in the blocks collection.
    blockId: {
        type: String
    },
    type: {
        type: Number
    },
    senderPublicKey: {
        type: Uint8Array
    },
    // TODO: Validate that the id exists in the memAccounts collection.
    senderId: {
        type: String
    },
    // TODO: Validate that the id exists in the memAccounts collection.
    recipientId: {
        type: String,
        optional: true
    },
    amount: {
        type: Number
    },
    fee: {
        type: Number
    },
    signature: {
        type: Uint8Array
    },
    signSignature: {
        type: Uint8Array,
        optional: true
    },
    requesterPublicKey: {
        type: Uint8Array,
        optional: true
    },
    signatures: {
        type: String,
        optional: true
    }
}));
