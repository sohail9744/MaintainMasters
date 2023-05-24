sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("com.iffco.maintainmasterdata.controller.View1", {
            // oninit
            onInit: function () {
                this.getOwnerComponent().getModel().setSizeLimit(100);
                if (!this._veticalDialog) {
                    this._veticalDialog = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.Vertical", this);
                    this.getView().addDependent(this._veticalDialog);
                }
                if (!this.currencyDlg) {
                    this.currencyDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.Currency", this);
                    this.getView().addDependent(this.currencyDlg);
                }
                if (!this.BUDialog) {
                    this.BUDialog = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.BusinessUnit", this);
                    this.getView().addDependent(this.BUDialog);
                }
                if (!this.violationDlg) {
                    this.violationDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.violation", this);
                    this.getView().addDependent(this.violationDlg);
                }
                if (!this.verticalDlg) {
                    this.verticalDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.Vertical", this);
                    this.getView().addDependent(this.verticalDlg);
                }
                if (!this.bankMasterDlg) {
                    this.bankMasterDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.BankMaster", this);
                    this.getView().addDependent(this.bankMasterDlg);
                }
                if (!this.channelMasterDlg) {
                    this.channelMasterDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.channelMaster", this);
                    this.getView().addDependent(this.channelMasterDlg);
                }
                if (!this.channelGrpDlg) {
                    this.channelGrpDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.ChannelGroup", this);
                    this.getView().addDependent(this.channelGrpDlg);
                }
                if (!this.subChannelDlg) {
                    this.subChannelDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.subChannel", this);
                    this.getView().addDependent(this.subChannelDlg);
                }
                if (!this.reminderDlg) {
                    this.reminderDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.Reminder", this);
                    this.getView().addDependent(this.reminderDlg);
                }
                if (!this.DOAMasterDlg) {
                    this.DOAMasterDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.DOAmaster", this);
                    this.getView().addDependent(this.DOAMasterDlg);
                }
                if (!this.DelegationTrDlg) {
                    this.DelegationTrDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.DelegationTrading", this);
                    this.getView().addDependent(this.DelegationTrDlg);
                }
                if (!this.lineOfBsnsDlg) {
                    this.lineOfBsnsDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.lineOfBusnsType", this);
                    this.getView().addDependent(this.lineOfBsnsDlg);
                }
                if (!this.payTermsDlg) {
                    this.payTermsDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.PaymentTerms", this);
                    this.getView().addDependent(this.payTermsDlg);
                }
                if (!this.CDPDDialog) {
                    this.CDPDDialog = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.CrdtDysPerDomstic", this);
                    this.getView().addDependent(this.CDPDDialog);
                }
                if (!this.ExpPayTermsDlg) {
                    this.ExpPayTermsDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.exportPayTerms", this);
                    this.getView().addDependent(this.ExpPayTermsDlg);
                }
                if (!this.legalStatsDlg) {
                    this.legalStatsDlg = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.legalStatus", this);
                    this.getView().addDependent(this.legalStatsDlg);
                }
            },
            handleAddCurrency: function (oEvent) {
                this.currency = "new";
                this.currencyDlg.open();
                this.currencyDlg.getContent()[0].getContent()[2].setValue(null);
                this.currencyDlg.getContent()[0].getContent()[4].setValue(null);
                this.currencyDlg.getContent()[0].getContent()[6].setValue(null);
                this.currencyDlg.getContent()[0].getContent()[8].setValue(null);
                this.currencyDlg.getContent()[0].getContent()[10].setValue(null);
            },
            onCurrencyCreate: function (oEvent) {
                var oModel = this.getView().getModel();
                var currency = this.currencyDlg.getContent()[0].getContent()[2].getValue();
                var abbreviation = this.currencyDlg.getContent()[0].getContent()[4].getValue();
                var isactive = this.currencyDlg.getContent()[0].getContent()[10];
                var forexrate = this.currencyDlg.getContent()[0].getContent()[8].getValue();
                if (currency && abbreviation && forexrate) {
                    var buObj = {
                        "currency": currency,
                        "abbreviation": abbreviation,
                        "country": this.currencyDlg.getContent()[0].getContent()[6].getValue(),
                        "forexrate": forexrate,
                        "isactive": isactive.getSelectedButton() ? isactive.getSelectedButton().getText() : ""
                    }
                    var postObj = {
                        "d": buObj
                    };
                    if (this.currency == "new") {
                        this.currencyDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                        oModel.create("/zdd_cr_currency_vh", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Currency added successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.currencyDlg.getModel().updateBindings(true);
                        this.currencyDlg.close();
                    } else {
                        this.currencyDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                        oModel.update("/zdd_cr_currency_vh(currency='"+currency+"',abbreviation='"+abbreviation+"')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.currencyDlg.getModel().updateBindings(true);
                        this.currencyDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onCurrencyCancel: function (oEvent) {
                this.currencyDlg.close();
            },
            handleEditCurrency: function (evt) {
                this.currency = "edit";
                this.currencyDlg.open();
                var currency = evt.getSource().getBindingContext().getObject().currency;
                var abbrv = evt.getSource().getBindingContext().getObject().abbreviation;
                var country = evt.getSource().getBindingContext().getObject().country;
                var forexrate = evt.getSource().getBindingContext().getObject().forexrate;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.currencyDlg.getContent()[0].getContent()[2].setValue(currency);
                this.currencyDlg.getContent()[0].getContent()[4].setValue(abbrv);
                this.currencyDlg.getContent()[0].getContent()[6].setValue(country);
                this.currencyDlg.getContent()[0].getContent()[8].setValue(forexrate);
                //this.currencyDlg.getContent()[0].getContent()[10].setSelectedButton(isactive);
            },
            handleAddBU: function (evt) {
                this.BU = "new";
                this.BUDialog.getContent()[0].getContent()[2].setValue();
                this.BUDialog.getContent()[0].getContent()[4].setValue();
                this.BUDialog.getContent()[0].getContent()[6].setValue();
                this.BUDialog.getContent()[0].getContent()[8].setValue();
                this.BUDialog.getContent()[0].getContent()[10].setValue();
                this.BUDialog.getContent()[0].getContent()[12].setValue();
                this.BUDialog.getContent()[0].getContent()[14].setValue();
                this.BUDialog.getContent()[0].getContent()[16].setValue();
                this.BUDialog.getContent()[0].getContent()[18].setValue();
                this.BUDialog.getContent()[0].getContent()[21].setValue();
                this.BUDialog.getContent()[0].getContent()[23].setValue();
                this.BUDialog.getContent()[0].getContent()[25].setValue();
                this.BUDialog.getContent()[0].getContent()[27].setValue();
                this.BUDialog.getContent()[0].getContent()[29].setValue();
                this.BUDialog.getContent()[0].getContent()[31].setValue();
                this.BUDialog.getContent()[0].getContent()[33].setValue();
                this.BUDialog.getContent()[0].getContent()[35].setValue();
                this.BUDialog.getContent()[0].getContent()[38].setValue();
                this.BUDialog.getContent()[0].getContent()[40].setValue();
                this.BUDialog.getContent()[0].getContent()[42].setValue();
                this.BUDialog.getContent()[0].getContent()[44].setValue();
                this.BUDialog.getContent()[0].getContent()[46].setValue();
                this.BUDialog.getContent()[0].getContent()[48].setValue();
                this.BUDialog.getContent()[0].getContent()[50].setValue();
                this.BUDialog.getContent()[0].getContent()[52].setValue();
                this.BUDialog.getContent()[0].getContent()[55].setValue();
                this.BUDialog.getContent()[0].getContent()[57].setValue();
                this.BUDialog.getContent()[0].getContent()[59].setValue();
                this.BUDialog.getContent()[0].getContent()[61].setValue();
                this.BUDialog.getContent()[0].getContent()[63].setValue();
                this.BUDialog.getContent()[0].getContent()[65].setValue();
                this.BUDialog.getContent()[0].getContent()[67].setValue();
                this.BUDialog.getContent()[0].getContent()[69].setValue();
                this.BUDialog.getContent()[0].getContent()[71].setValue();
                this.BUDialog.open();
            },
            onBUCreate: function (oEvent) {
                var oModel = this.getView().getModel();
                var BusinessUnit = this.BUDialog.getContent()[0].getContent()[2].getValue();
                var BuCode = this.BUDialog.getContent()[0].getContent()[4].getValue();
                var vertical = this.BUDialog.getContent()[0].getContent()[6].getValue();
                var isactive = this.BUDialog.getContent()[0].getContent()[75];
                var issnd = this.BUDialog.getContent()[0].getContent()[73];
                if (BusinessUnit && BuCode && vertical) {
                    var buObj = {
                        "Businessunit": BusinessUnit,
                        "bucode": BuCode,
                        "vertical": vertical,
                        "childbusinessunit": this.BUDialog.getContent()[0].getContent()[8].getValue(),
                        "currency": this.BUDialog.getContent()[0].getContent()[10].getValue(),
                        "erpsource": this.BUDialog.getContent()[0].getContent()[12].getValue(),
                        "bushortcode": this.BUDialog.getContent()[0].getContent()[14].getValue(),
                        "trading": this.BUDialog.getContent()[0].getContent()[16].getValue(),
                        "maxcreditlimitapplicable": this.BUDialog.getContent()[0].getContent()[18].getValue(),
                        "maximumcreditdayslogic": this.BUDialog.getContent()[0].getContent()[21].getValue(),
                        "cc": this.BUDialog.getContent()[0].getContent()[23].getValue(),
                        "ccemailid": this.BUDialog.getContent()[0].getContent()[25].getValue(),
                        "fa": this.BUDialog.getContent()[0].getContent()[27].getValue(),
                        "faemailid": this.BUDialog.getContent()[0].getContent()[29].getValue(),
                        "hof": this.BUDialog.getContent()[0].getContent()[31].getValue(),
                        "hofemailid": this.BUDialog.getContent()[0].getContent()[33].getValue(),
                        "gm": this.BUDialog.getContent()[0].getContent()[35].getValue(),
                        "gmemailid": this.BUDialog.getContent()[0].getContent()[38].getValue(),
                        "Ceo": this.BUDialog.getContent()[0].getContent()[40].getValue(),
                        "ceoemailid": this.BUDialog.getContent()[0].getContent()[42].getValue(),
                        "rf": this.BUDialog.getContent()[0].getContent()[44].getValue(),
                        "rfemailid": this.BUDialog.getContent()[0].getContent()[46].getValue(),
                        "Cfr": this.BUDialog.getContent()[0].getContent()[48].getValue(),
                        "cfremailid": this.BUDialog.getContent()[0].getContent()[50].getValue(),
                        "df": this.BUDialog.getContent()[0].getContent()[52].getValue(),
                        "dfemailid": this.BUDialog.getContent()[0].getContent()[55].getValue(),
                        "md": this.BUDialog.getContent()[0].getContent()[57].getValue(),
                        "mdemailid": this.BUDialog.getContent()[0].getContent()[59].getValue(),
                        "ed": this.BUDialog.getContent()[0].getContent()[61].getValue(),
                        "edemailid": this.BUDialog.getContent()[0].getContent()[63].getValue(),
                        "sb": this.BUDialog.getContent()[0].getContent()[65].getValue(),
                        "sbemailid": this.BUDialog.getContent()[0].getContent()[67].getValue(),
                        "mdm": this.BUDialog.getContent()[0].getContent()[69].getValue(),
                        "mdmemailid": this.BUDialog.getContent()[0].getContent()[71].getValue(),
                        "issnd": issnd.getSelectedButton() ? issnd.getSelectedButton().getText() : "",
                        "isactive": isactive.getSelectedButton() ? isactive.getSelectedButton().getText() : ""
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.BUDialog.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_BusinessUnit_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Business Unit added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.BUDialog.getModel().updateBindings(true);
                    this.BUDialog.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onBUCancel: function (oEvent) {
                this.BUDialog.close();
            },
            handleEditBU: function (evt) {
                this.BU = "edit";
                this.currencyDlg.open();
                var currency = evt.getSource().getBindingContext().getObject().currency;
                var Businessunit = evt.getSource().getBindingContext().getObject().BusinessUnit;
                var bucode = evt.getSource().getBindingContext().getObject().bucode;
                var vertical = evt.getSource().getBindingContext().getObject().vertical;
                var childbusinessunit = evt.getSource().getBindingContext().getObject();
                var erpsource = evt.getSource().getBindingContext().getObject().erpsource;
                var bushortcode = evt.getSource().getBindingContext().getObject().bushortcode;
                var trading = evt.getSource().getBindingContext().getObject().trading;
                var maxcreditlimitapplicable = evt.getSource().getBindingContext().getObject().maxcreditlimitapplicable;
                var maximumcreditdayslogic = evt.getSource().getBindingContext().getObject().maximumcreditdayslogic;
                var cc = evt.getSource().getBindingContext().getObject().cc;
                var ccemailid =  evt.getSource().getBindingContext().getObject().ccemailid;
                var fa =  evt.getSource().getBindingContext().getObject().fa;
                var faemailid =  evt.getSource().getBindingContext().getObject().faemailid;
                var hof =  evt.getSource().getBindingContext().getObject().hof;
                var hofemailid =  evt.getSource().getBindingContext().getObject().hofemailid;
                var gm =  evt.getSource().getBindingContext().getObject().gm;
                var gmemailid =  evt.getSource().getBindingContext().getObject().gmemailid;
                var Ceo =  evt.getSource().getBindingContext().getObject().Ceo;
                var ceoemailid =  evt.getSource().getBindingContext().getObject().ceoemailid;
                var rf =  evt.getSource().getBindingContext().getObject().rf;
                var rfemailid =  evt.getSource().getBindingContext().getObject().rfemailid;
                var Cfr =  evt.getSource().getBindingContext().getObject().Cfr;
                var cfremailid =  evt.getSource().getBindingContext().getObject().cfremailid;
                var df =  evt.getSource().getBindingContext().getObject().df;
                var dfemailid =  evt.getSource().getBindingContext().getObject().dfemailid;
                var md =  evt.getSource().getBindingContext().getObject().md;
                var mdemailid =  evt.getSource().getBindingContext().getObject().mdemailid;
                var ed =  evt.getSource().getBindingContext().getObject().ed;
                var edemailid =  evt.getSource().getBindingContext().getObject().edemailid;
                var sb =  evt.getSource().getBindingContext().getObject().sb;
                var sbemailid =  evt.getSource().getBindingContext().getObject().sbemailid;
                var mdm =  evt.getSource().getBindingContext().getObject().md;
                var mdmemailid =  evt.getSource().getBindingContext().getObject().mdmemailid;
                var issnd = evt.getSource().getBindingContext().getObject().issnd;
                var isactive =evt.getSource().getBindingContext().getObject().isactive;
                this.BUDialog.getContent()[0].getContent()[2].setValue(currency);
                this.BUDialog.getContent()[0].getContent()[4].setValue(Businessunit);
                this.BUDialog.getContent()[0].getContent()[6].setValue(bucode);
                this.BUDialog.getContent()[0].getContent()[8].setValue(vertical);
                this.BUDialog.getContent()[0].getContent()[10].setValue(childbusinessunit);
                this.BUDialog.getContent()[0].getContent()[12].setValue(erpsource);
                this.BUDialog.getContent()[0].getContent()[14].setValue(bushortcode);
                this.BUDialog.getContent()[0].getContent()[16].setValue(trading);
                this.BUDialog.getContent()[0].getContent()[18].setValue(maxcreditlimitapplicable);
                this.BUDialog.getContent()[0].getContent()[21].setValue(maximumcreditdayslogic);
                this.BUDialog.getContent()[0].getContent()[23].setValue(cc);
                this.BUDialog.getContent()[0].getContent()[25].setValue(ccemailid);
                this.BUDialog.getContent()[0].getContent()[27].setValue(fa);
                this.BUDialog.getContent()[0].getContent()[29].setValue(faemailid);
                this.BUDialog.getContent()[0].getContent()[31].setValue(hof);
                this.BUDialog.getContent()[0].getContent()[33].setValue(hofemailid);
                this.BUDialog.getContent()[0].getContent()[35].setValue(gm);
                this.BUDialog.getContent()[0].getContent()[38].setValue(gmemailid);
                this.BUDialog.getContent()[0].getContent()[40].setValue(Ceo);
                this.BUDialog.getContent()[0].getContent()[42].setValue(ceoemailid);
                this.BUDialog.getContent()[0].getContent()[44].setValue(rf);
                this.BUDialog.getContent()[0].getContent()[46].setValue(rfemailid);
                this.BUDialog.getContent()[0].getContent()[48].setValue(Cfr);
                this.BUDialog.getContent()[0].getContent()[50].setValue(cfremailid);
                this.BUDialog.getContent()[0].getContent()[52].setValue(df);
                this.BUDialog.getContent()[0].getContent()[55].setValue(dfemailid);
                this.BUDialog.getContent()[0].getContent()[57].setValue(md);
                this.BUDialog.getContent()[0].getContent()[59].setValue(mdemailid);
                this.BUDialog.getContent()[0].getContent()[61].setValue(ed);
                this.BUDialog.getContent()[0].getContent()[63].setValue(edemailid);
                this.BUDialog.getContent()[0].getContent()[65].setValue(sb);
                this.BUDialog.getContent()[0].getContent()[67].setValue(sbemailid);
                this.BUDialog.getContent()[0].getContent()[69].setValue(mdm);
                this.BUDialog.getContent()[0].getContent()[71].setValue(mdmemailid);
                // this.BUDialog.getContent()[0].getContent()[73].setValue();
            },
            handleAddBankMaster: function (oEvent) {
                this.bankMasterDlg.open();
            },
            onBankCreate: function (oEvent) {
                this.sOperation = "add";
                var oModel = this.getView().getModel();
                var bank = this.bankMasterDlg.getContent()[0].getContent()[2].getValue();
                var isactive = this.bankMasterDlg.getContent()[0].getContent()[6];
                var bankWithCondn = this.bankMasterDlg.getContent()[0].getContent()[8];
                if (bank) {
                    var buObj = {
                        "bank": bank,
                        "country": this.bankMasterDlg.getContent()[0].getContent()[4].getValue(),
                        "isactive": isactive.getSelectedButton() ? isactive.getSelectedButton().getText() : "",
                        "isbank_with_condition": bankWithCondn.getSelectedButton() ? bankWithCondn.getSelectedButton().getText() : "",
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.bankMasterDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_BANK_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Bank Master added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.bankMasterDlg.getModel().updateBindings(true);
                    this.bankMasterDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onBankCancel: function (evt) {
                this.bankMasterDlg.close();
            },
            onselectVerticalRowPress: function (oEvent) {
                 this.bankMasterDlg.open();
        },
            handleAddCM: function (evt) {
                this.channelMasterDlg.open();
            },
            onChannelMCreate: function (oEvent) {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var channel = this.channelMasterDlg.getContent()[0].getContent()[2].getValue();
                var isactive = this.channelMasterDlg.getContent()[0].getContent()[4].getSelectedButton().getText();
                if (isactive == "Yes") {
                    isactive = "1";
                } else {
                    isactive = "0";
                }
                if (channel) {
                    var buObj = {
                        "channel": channel,
                        "isactive": isactive
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.channelMasterDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_Channel_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Channel Master added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.channelMasterDlg.getModel().updateBindings(true);
                    this.channelMasterDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onChannelMCancel: function (oEvent) {
                this.channelMasterDlg.close();
            },
            handleAddCG: function (oEvent) {
                this.channelGrpDlg.open();
            },
            onChannelGCreate: function (oEvent) {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var channelGrp = this.channelGrpDlg.getContent()[0].getContent()[2].getValue();
                var isactive = this.channelMasterDlg.getContent()[0].getContent()[4];
                if (channelGrp && isactive) {
                    var buObj = {
                        "channelgroup": channelGrp,
                        "isactive": isactive.getSelectedButton() ? isactive.getSelectedButton().getText() : ""
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.channelGrpDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_ChannleGroup_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Channel Group added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.channelGrpDlg.getModel().updateBindings(true);
                    this.channelGrpDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onChannelGCancel: function (oEvent) {
                this.channelGrpDlg.close();
            },
            handleAddViolation: function (oEvent) {
                this.violationDlg.open();
            },
            onViolationCreate: function (oEvent) {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var businessUnitName = this.violationDlg.getContent()[0].getContent()[2].getValue();
                var verticalForm = this.violationDlg.getContent()[0].getContent()[4].getValue();
                var violationtypename = this.violationDlg.getContent()[0].getContent()[6].getValue();
                if (businessUnitName && verticalForm && violationtypename) {
                    var buObj = {
                        "businessunitname": businessUnitName,
                        "verticalname": verticalForm,
                        "violationtypename": violationtypename,
                        "rolename": this.violationDlg.getContent()[0].getContent()[8].getValue(),
                        "isactive": this.violationDlg.getContent()[0].getContent()[10].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.violationDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_VIOLATION", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Violation added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.violationDlg.getModel().updateBindings(true);
                    this.violationDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onViolationCancel: function (oEvent) {
                this.violationDlg.close();
            },
            handleAddSC: function (oEvent) {
                this.subChannelDlg.open();
            },
            onSubChannelCreate: function (oEvent) {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var subChannel = this.subChannelDlg.getContent()[0].getContent()[2].getValue();
                if (subChannel) {
                    var buObj = {
                        "subchannel": subChannel,
                        "isactive": this.subChannelDlg.getContent()[0].getContent()[4].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.subChannelDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_SubChannel_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Sub Channel added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.subChannelDlg.getModel().updateBindings(true);
                    this.subChannelDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onSubChannelCancel: function (oEvent) {
                this.subChannelDlg.open();
            },
            handleAddReminder: function (oEvent) {
                this.reminderDlg.open();
            },
            onReminderCreate: function (oEvent) {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var Title = this.reminderDlg.getContent()[0].getContent()[2].getValue();
                if (Title) {
                    var buObj = {
                        "title": Title,
                        "daysno": this.reminderDlg.getContent()[0].getContent()[4].getValue(),
                        "toroles": this.reminderDlg.getContent()[0].getContent()[6].getValue(),
                        "ccroles": this.reminderDlg.getContent()[0].getContent()[8].getValue(),
                        "status": this.reminderDlg.getContent()[0].getContent()[10].getValue(),
                        "emailtemplatebody": this.reminderDlg.getContent()[0].getContent()[12].getValue(),
                        "isactive": this.reminderDlg.getContent()[0].getContent()[14].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.reminderDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_SubChannel_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Reminder added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.reminderDlg.getModel().updateBindings(true);
                    this.reminderDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onReminderCancel: function (oEvent) {
                this.reminderDlg.close();
            },
            handleAddVertical: function (oEvent) {
                this.verticalDlg.open();
            },
            onVerticalCreate: function (oEvent) {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var vertical = this.verticalDlg.getContent()[0].getContent()[2].getValue();
                var isactive = this.verticalDlg.getContent()[0].getContent()[10].getSelectedButton().getText();
                var iscash = this.verticalDlg.getContent()[0].getContent()[12].getSelectedButton().getText();
                if (isactive == "Yes")
                    isactive = "Y";
                else
                    isactive = "N";
                if (iscash == "Yes")
                    iscash = "Y";
                else
                    iscash = "N";
                if (vertical) {
                    var buObj = {
                        "vertical": vertical,
                        "verticaldescription": this.verticalDlg.getContent()[0].getContent()[4].getValue(),
                        "mdapprovalrequired": this.verticalDlg.getContent()[0].getContent()[6].getValue(),
                        "sitevisitcompulsion": this.verticalDlg.getContent()[0].getContent()[8].getSelectedButton().getText(),
                        "isactive": isactive,
                        "iscash": iscash
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.verticalDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_Vertical_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Vertical added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.verticalDlg.getModel().updateBindings(true);
                    this.verticalDlg.close();
                }
            },
            onVerticalCancel: function (oEvent) {
                this.verticalDlg.close();
            },
            handleAddVertical: function (oEvent) {
                this.DOAMasterDlg.close();
            },
            onDOACreate: function (oEvent) {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var customerType = this.DOAMasterDlg.getContent()[0].getContent()[2].getValue();
                var classTyp = this.DOAMasterDlg.getContent()[0].getContent()[4].getValue();
                var CreditType = this.DOAMasterDlg.getContent()[0].getContent()[6].getValue();
                var BusinessUnit = this.DOAMasterDlg.getContent()[0].getContent()[8].getValue();
                var Vertical = this.DOAMasterDlg.getContent()[0].getContent()[10].getValue();
                var minimumcreditlimit = this.DOAMasterDlg.getContent()[0].getContent()[12].getValue();
                var maximumcreditlimit = this.DOAMasterDlg.getContent()[0].getContent()[14].getValue();
                if (customerType && classTyp && CreditType && BusinessUnit && Vertical && minimumcreditlimit && maximumcreditlimit) {
                    var buObj = {
                        "customertype": customerType,
                        "class": classTyp,
                        "credittype": CreditType,
                        "businessunit": BusinessUnit,
                        "vertical": Vertical,
                        "minimumcreditlimit": minimumcreditlimit,
                        "maximumcreditlimit": maximumcreditlimit,
                        "lastselectedrole": this.DOAMasterDlg.getContent()[0].getContent()[17].getValue(),
                        "iscad": this.DOAMasterDlg.getContent()[0].getContent()[19].getSelectedButton().getText(),
                        "roletype": this.DOAMasterDlg.getContent()[0].getContent()[21].getValue(),
                        "informativerole": this.DOAMasterDlg.getContent()[0].getContent()[23].getValue(),
                        "isactive": this.DOAMasterDlg.getContent()[0].getContent()[24].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.DOAMasterDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_DELEGATION_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("DOA Master added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.DOAMasterDlg.getModel().updateBindings(true);
                    this.DOAMasterDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onDOACancel: function () {
                this.DOAMasterDlg.close();
            },
            handleAddDelegationTR: function () {
                this.DelegationTrDlg.open();
            },
            onDelegationTRCreate: function () {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var customerType = this.DelegationTrDlg.getContent()[0].getContent()[2].getValue();
                var classTyp = this.DelegationTrDlg.getContent()[0].getContent()[6].getValue();
                var CreditType = this.DelegationTrDlg.getContent()[0].getContent()[4].getValue();
                var BusinessUnit = this.DelegationTrDlg.getContent()[0].getContent()[8].getValue();
                var Vertical = this.DelegationTrDlg.getContent()[0].getContent()[10].getValue();
                var segment = this.DelegationTrDlg.getContent()[0].getContent()[12].getValue();
                var minimumQtylimit = this.DelegationTrDlg.getContent()[0].getContent()[14].getValue();
                var maximumQtylimit = this.DelegationTrDlg.getContent()[0].getContent()[16].getValue();
                var minimumcValuelimit = this.DelegationTrDlg.getContent()[0].getContent()[19].getValue();
                var maximumValuelimit = this.DelegationTrDlg.getContent()[0].getContent()[21].getValue();
                if (customerType && classTyp && CreditType && BusinessUnit && Vertical && segment && minimumQtylimit && maximumQtylimit && minimumcValuelimit && maximumValuelimit) {
                    var buObj = {
                        "customertype": customerType,
                        "class": classTyp,
                        "credittype": CreditType,
                        "businessunit": BusinessUnit,
                        "vertical": Vertical,
                        "minimumcreditlimit": minimumcreditlimit,
                        "maximumcreditlimit": maximumcreditlimit,
                        "lastselectedrole": this.DelegationTrDlg.getContent()[0].getContent()[16].getValue(),
                        "iscad": this.DelegationTrDlg.getContent()[0].getContent()[18].getValue(),
                        "roletype": this.DelegationTrDlg.getContent()[0].getContent()[20].getValue(),
                        "informativerole": this.DelegationTrDlg.getContent()[0].getContent()[21].getValue(),
                        "isactive": this.DelegationTrDlg.getContent()[0].getContent()[23].getValue(),
                        "customertype": customerType,
                        "creditlimittype": CreditType,
                        "classtype": classTyp,
                        "businessunit": BusinessUnit,
                        "vertical": Vertical,
                        "segment": segment,
                        "minimumquantitylimit": minimumQtylimit,
                        "maximumquantitylimit": maximumQtylimit,
                        "minimumvaluelimit": minimumcValuelimit,
                        "maximumvaluelimit": maximumValuelimit,
                        "lastselectedrole": this.DelegationTrDlg.getContent()[0].getContent()[23].getValue(),
                        "roletype": this.DelegationTrDlg.getContent()[0].getContent()[25].getValue(),
                        "informativerole": this.DelegationTrDlg.getContent()[0].getContent()[27].getValue(),
                        "iscad": this.DelegationTrDlg.getContent()[0].getContent()[29].getSelectedButton().getText(),
                        "isactive": this.DelegationTrDlg.getContent()[0].getContent()[31].getSelectedButton().getText(),
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.DelegationTrDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_DELEGATION_TR_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Delegation Trading added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.DelegationTrDlg.getModel().updateBindings(true);
                    this.DelegationTrDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onDelegationTRCancel: function () {
                this.DelegationTrDlg.close();
            },
            handleAddCDPD: function () {
                this.CDPDDialog.open();
            },
            onCDPDCreate: function () {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var srno = this.CDPDDialog.getContent()[0].getContent()[2].getValue();
                var channel = this.CDPDDialog.getContent()[0].getContent()[4].getValue();
                if (srno && channel) {
                    var buObj = {
                        "srno": srno,
                        "channel": channel,
                        "subchannel": this.CDPDDialog.getContent()[0].getContent()[6].getValue(),
                        "lineofbusinesstype": this.CDPDDialog.getContent()[0].getContent()[8].getValue(),
                        "classtype": this.CDPDDialog.getContent()[0].getContent()[10].getValue(),
                        "maximumcreditdays": this.CDPDDialog.getContent()[0].getContent()[12].getValue(),
                        "businessunit": this.CDPDDialog.getContent()[0].getContent()[14].getValue(),
                        "vertical": this.CDPDDialog.getContent()[0].getContent()[16].getValue(),
                        "doarole": this.CDPDDialog.getContent()[0].getContent()[18].getValue(),
                        "isproxima": this.CDPDDialog.getContent()[0].getContent()[20].getSelectedButton().getText(),
                        "isactive": this.CDPDDialog.getContent()[0].getContent()[22].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.CDPDDialog.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_CREDIT_DOM_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Credit Days Per Domestic added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.CDPDDialog.getModel().updateBindings(true);
                    this.CDPDDialog.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onCDPDCancel: function () {
                this.CDPDDialog.close();
            },
            handleAddLegalStatus: function () {
                this.legalStatsDlg.open();
            },
            onlegalStatusCreate: function () {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var legalStatus = this.legalStatsDlg.getContent()[0].getContent()[2].getValue();
                if (legalStatus) {
                    var buObj = {
                        "Legalstatus": legalStatus,
                        "Iscompany": this.legalStatsDlg.getContent()[0].getContent()[4].getSelectedButton().getText(),
                        "Ispartnership": this.legalStatsDlg.getContent()[0].getContent()[6].getSelectedButton().getText(),
                        "Isowner": this.legalStatsDlg.getContent()[0].getContent()[8].getSelectedButton().getText(),
                        "Isactive": this.legalStatsDlg.getContent()[0].getContent()[10].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.CDPDDialog.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/ZDD_LEGAL_STATUS_VH", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Legal Status added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.CDPDDialog.getModel().updateBindings(true);
                    this.CDPDDialog.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onlegalStatusCancel: function () {
                this.CDPDDialog.close();
            },
            handleAddLOBT: function () {
                this.lineOfBsnsDlg.open();
            },
            onLOBTCreate: function () {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var channelgroup = this.lineOfBsnsDlg.getContent()[0].getContent()[2].getValue();
                var channel = this.lineOfBsnsDlg.getContent()[0].getContent()[4].getValue();
                var subchannel = this.lineOfBsnsDlg.getContent()[0].getContent()[6].getValue();
                var lineofbusinesstype = this.lineOfBsnsDlg.getContent()[0].getContent()[8].getValue();
                if (channelgroup && channel && subchannel && lineofbusinesstype) {
                    var buObj = {
                        "channelgroup": channelgroup,
                        "channel": channel,
                        "subchannel": subchannel,
                        "lineofbusinesstype": lineofbusinesstype,
                        "isactive": this.lineOfBsnsDlg.getContent()[0].getContent()[10].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.lineOfBsnsDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/zdd_lineofbusiness_vh", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Line of Business Type added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.lineOfBsnsDlg.getModel().updateBindings(true);
                    this.lineOfBsnsDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onLOBTCancel: function () {
                this.lineOfBsnsDlg.close();
            },
            handleAddPayTerms: function () {
                this.payTermsDlg.open();
            },
            onPayTermCreate: function () {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var customertype = this.payTermsDlg.getContent()[0].getContent()[2].getValue();
                var credittype = this.payTermsDlg.getContent()[0].getContent()[4].getValue();
                var paymentterm = this.payTermsDlg.getContent()[0].getContent()[6].getValue();
                var iscad = this.payTermsDlg.getContent()[0].getContent()[8].getSelectedButton();
                var tillsb = this.payTermsDlg.getContent()[0].getContent()[10].getValue();
                if (customertype && credittype && paymentterm && iscad && tillsb) {
                    var buObj = {
                        "customertype": customertype,
                        "credittype": credittype,
                        "paymentterm": paymentterm,
                        "iscad": iscad.getText(),
                        "tillsb": tillsb,
                        "isactive": this.payTermsDlg.getContent()[0].getContent()[12].getSelectedButton().getText()
                    };
                    var postObj = {
                        "d": buObj
                    };
                    this.payTermsDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/zdd_paymentterm_vh", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Payment Terms added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.payTermsDlg.getModel().updateBindings(true);
                    this.payTermsDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onPayTermCancel: function () {
                this.payTermsDlg.close();
            },
            handleAddExpPayTerms: function () {
                this.ExpPayTermsDlg.open();
            },
            onExpPayTermCreate: function () {
                //this.sOperation = "add";
                var oModel = this.getView().getModel();
                var customertype = this.ExpPayTermsDlg.getContent()[0].getContent()[2].getValue();
                var credittype = this.ExpPayTermsDlg.getContent()[0].getContent()[4].getValue();
                var paymentterm = this.ExpPayTermsDlg.getContent()[0].getContent()[6].getValue();
                var iscad = this.ExpPayTermsDlg.getContent()[0].getContent()[8].getSelectedButton();
                var tillsb = this.ExpPayTermsDlg.getContent()[0].getContent()[10].getValue();
                if (customertype && credittype && paymentterm && iscad && tillsb) {
                    var buObj = {
                        "customertype": customertype,
                        "credittype": credittype,
                        "paymentterm": paymentterm,
                        "iscad": iscad.getText(),
                        "tillsb": tillsb,
                        "isactive": this.payTermsDlg.getContent()[0].getContent()[12].getSelectedButton().getText()
                    };
                    var postObj = {
                        "d": buObj
                    };
                    this.ExpPayTermsDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    oModel.create("/zdd_paymentterm_vh", buObj, {
                        success: function (oData, oResponse) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.success("Payment Terms added successfully");

                        }.bind(this),
                        error: function (oError) {
                            jQuery.sap.require("sap.m.MessageBox");
                            sap.m.MessageBox.error(oError.message);
                        }
                    });
                    this.ExpPayTermsDlg.getModel().updateBindings(true);
                    this.ExpPayTermsDlg.close();
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            onExpPayTermCancel: function () {
                this.ExpPayTermsDlg.close();
            },
            onBUOK: function (oEvent) {
                var that = this;
                // var oDialog = oEvent.getSource().getParent();
                // var sCode = oDialog.getContent()[0].getContent()[1].getValue();
                // var sValue = oDialog.getContent()[0].getContent()[3].getValue();
                // var sVertical = oDialog.getContent()[0].getContent()[5].getSelectedKey();
                // var sERPSource = oDialog.getContent()[0].getContent()[7].getValue();
                // if (sValue == null | sValue == undefined || sValue == "") {
                //     MessageBox.error("Enter Business Unit Name");
                // }
                var oObject = {
                    "d": this._buDialog.getModel().getData()
                };
                oObject.d.issnd = this._buDialog.getContent()[0].getContent()[71].getSelectedButton().getText();
                oObject.d.isactive = this._buDialog.getContent()[0].getContent()[73].getSelectedButton().getText();
                var oModel = this.getView().getModel();
                if (this.sOperation == "add") {
                    oModel.create("/ZDD_BusinessUnit_VH", oObject, {
                        success: function (oData, oResponse) {
                            MessageToast.show("Added Successfully");
                            this.getView().getModel().refresh();
                            this._buDialog.close();

                        }.bind(this),
                        error: function (oError) {
                            MessageBox.error(JSON.parse(oError.responseText).error.message.value);
                            this._buDialog.close();
                        }
                    });
                } else {
                    //var sValue = this._buDialog.getContent()[0].getContent()[4].getValue();
                    var dataObj = this._buDialog.getModel().getData();
                    var sPath = "/ZDD_BusinessUnit_VH(Businessunit='" + dataObj.Businessunit + "',bucode='" + dataObj.bucode + "',vertical='" + dataObj.vertical + "')"
                    oModel.update(encodeURI(sPath), oObject, {
                        success: function (oData, oResponse) {
                            MessageToast.show("Updated Successfully");
                            this.getView().getModel().refresh();
                            this._buDialog.close();
                        }.bind(this),
                        error: function (oError) {
                            MessageBox.error(JSON.parse(oError.responseText).error.message.value);
                            this._buDialog.close();
                        }
                    });
                }
            },
            handleDeleteBU: function (oEvent) {
                var oSelectedItem = oEvent.getSource().getParent().getParent().getSelectedItem();
                if (oSelectedItem != null) {
                    var sValue = oSelectedItem.getBindingContext().getProperty("Businessunit");
                    var sPath = "/ZDD_BusinessUnit_VH('" + sValue + "')";
                    var oModel = this.getView().getModel();
                    oModel.remove(encodeURI(sPath), {
                        success: function (oData, oResponse) {
                            MessageToast.show("Deleted Successfully");
                            this.getView().getModel().refresh();
                            oEvent.getSource().getParent().close();
                        }.bind(this),
                        error: function (oError) {
                            MessageBox.error("Internal Error Occurred. Please try again.");
                        }
                    });
                }
                else {
                    MessageBox.error("Select Business Unit Name to delete");
                }
            },
            getSplitContObj: function () {
                return this.getView().byId("SplitContDemo");
            },
            navigateToCurrency: function () {
                this.getSplitContObj().toDetail(this.createId("detail1"));
            },
            navigateToBM: function () {
                this.getSplitContObj().toDetail(this.createId("detail2"));
            },
            navigateToChannelMstr: function () {
                this.getSplitContObj().toDetail(this.createId("detail3"));
            },
            navigateToChannelGrp: function () {
                this.getSplitContObj().toDetail(this.createId("detail4"));
            },

            navigateToBU: function () {
                this.getSplitContObj().toDetail(this.createId("detail5"));
            },
            navigateToViolation: function () {
                this.getSplitContObj().toDetail(this.createId("detail6"));
            },
            navigateToSubChannel: function () {
                this.getSplitContObj().toDetail(this.createId("detail7"));
            },
            navigateToReminder: function () {
                this.getSplitContObj().toDetail(this.createId("detail8"));
            },
            navigateToVertical: function () {
                this.getSplitContObj().toDetail(this.createId("detail9"));
            },
            navigateToDOA: function () {
                this.getSplitContObj().toDetail(this.createId("detail10"));
            },
            navigateToDelegationTR: function () {
                this.getSplitContObj().toDetail(this.createId("detail11"));
            },
            navigateToCDPD: function () {
                this.getSplitContObj().toDetail(this.createId("detail12"));
            },
            navigateToLegalStatus: function () {
                this.getSplitContObj().toDetail(this.createId("detail13"));
            },
            navigateToLOBT: function () {
                this.getSplitContObj().toDetail(this.createId("detail14"));
            },
            navigateToPayTerms: function () {
                this.getSplitContObj().toDetail(this.createId("detail15"));
            },
            navigateToExpPayTerms: function () {
                this.getSplitContObj().toDetail(this.createId("detail16"));
            },
            navigateToCountry: function () {
                this.getSplitContObj().toDetail(this.createId("detail17"));
            },
            navigateToRemarks: function () {
                this.getSplitContObj().toDetail(this.createId("detail18"));
            }
        });
    });
