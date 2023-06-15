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
                if (!this.popOver) {
                    this.popOver = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.popOver", this);
                    this.getView().addDependent(this.popOver);
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
                if (!this.country) {
                    this.country = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.country", this);
                    this.getView().addDependent(this.country);
                }
                if (!this.remarks) {
                    this.remarks = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.remarks", this);
                    this.getView().addDependent(this.remarks);
                }
                if (!this.CredtManag) {
                    this.CredtManag = new sap.ui.xmlfragment("com.iffco.maintainmasterdata.fragments.creditManagement", this);
                    this.getView().addDependent(this.CredtManag);
                }
                this.handleBUModel();
                this.emlTempltModel();
                this.handleCurrModel();
                this.handleViolationModel();
                this.handleDOAModel();
                this.handleReminderModel();
                this.handleDelgTrdngModel();
                // this.handleMastersModels();
            },
            // handleMastersModels: function (oEvent) {
            // },
            handleAddCurrency: function (oEvent) {
                this.currency = "new";
                this.currencyDlg.setTitle("Add New Currency Master");
                this.currencyDlg.open();
                this.currencyDlg.getContent()[0].getContent()[2].setValue(null).setEditable(true);
                this.currencyDlg.getContent()[0].getContent()[4].setValue(null).setEditable(true);
                this.currencyDlg.getContent()[0].getContent()[6].setSelectedKey(null);
                this.currencyDlg.getContent()[0].getContent()[8].setValue(null);
                this.currencyDlg.getContent()[0].getContent()[10].setValue(null);
                this.currencyDlg.getContent()[0].getContent()[10].setSelectedIndex();
            },
            handleCurrModel: function () {
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/zdd_cr_currency_vh", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var i = 0; i < oData.results.length; i++) {
                                arr.push({
                                "country": oData.results[i].country,
                                "currency": oData.results[i].currency
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "CurrencyModel");
                        this.getView().getModel("CurrencyModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
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
                        "country": this.currencyDlg.getContent()[0].getContent()[6].getSelectedKey(),
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
                        this.currencyDlg.getModel().updateBindings();
                        this.currencyDlg.close();
                    } else {
                        this.currencyDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                        oModel.update("/zdd_cr_currency_vh(currency='" + encodeURIComponent(currency) + "',abbreviation='" + encodeURIComponent(abbreviation) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.currencyDlg.getModel().updateBindings();
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
                this.currencyDlg.setTitle("Edit Currency Master");
                this.currencyDlg.open();
                var currency = evt.getSource().getBindingContext().getObject().currency;
                var abbrv = evt.getSource().getBindingContext().getObject().abbreviation;
                var country = evt.getSource().getBindingContext().getObject().country;
                var forexrate = evt.getSource().getBindingContext().getObject().forexrate;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.currencyDlg.getContent()[0].getContent()[2].setValue(currency).setEditable(false);;
                this.currencyDlg.getContent()[0].getContent()[4].setValue(abbrv).setEditable(false);;
                this.currencyDlg.getContent()[0].getContent()[6].setSelectedKey(country);
                this.currencyDlg.getContent()[0].getContent()[8].setValue(forexrate);
                var index = (isactive == 'Yes') ? 0 : 1;
                this.currencyDlg.getContent()[0].getContent()[10].setSelectedIndex(index);
            },
            handleBUModel: function () {
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/ZDD_CHILD_BU_VH", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var i = 0; i < oData.results.length; i++) {
                            arr.push({
                                "childbusinessunit": oData.results[i].childbusinessunit,
                                "erpsource": oData.results[i].erpsource,
                                "Businessunit": oData.results[i].Businessunit
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "BUModel");
                        this.getView().getModel("BUModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
                oModel.read("/ZDD_Vertical_VH", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var j = 0; j < oData.results.length; j++) {
                            arr.push({
                                "vertical": oData.results[j].vertical
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "verticalModel");
                        this.getView().getModel("verticalModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
                oModel.read("/ZDD_CREDIT_DOM_VH", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var j = 0; j < oData.results.length; j++) {
                            arr.push({
                                "businessunit": oData.results[j].businessunit
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "CDPDModel");
                        this.getView().getModel("CDPDModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
                oModel.read("/zdd_paymentterm_vh", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var j = 0; j < oData.results.length; j++) {
                            arr.push({
                                "customertype": oData.results[j].customertype,
                                "credittype": oData.results[j].credittype
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "PayTermsModel");
                        this.getView().getModel("PayTermsModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
                oModel.read("/ZDD_ChannleGroup_VH", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var j = 0; j < oData.results.length; j++) {
                            arr.push({
                                "channelgroup": oData.results[j].channelgroup
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "CGModel");
                        this.getView().getModel("CGModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
                oModel.read("/ZDD_Channel_VH", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var j = 0; j < oData.results.length; j++) {
                            arr.push({
                                "channel": oData.results[j].channel
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "ChannelModel");
                        this.getView().getModel("ChannelModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
                oModel.read("/ZDD_SubChannel_VH", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var j = 0; j < oData.results.length; j++) {
                            arr.push({
                                "subchannel": oData.results[j].subchannel
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "subChannelModel");
                        this.getView().getModel("subChannelModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
            },
            handleAddBU: function (evt) {
                this.BU = "new";
                this.BUDialog.setTitle("Add New Business Unit");
                this.BUDialog.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.BUDialog.getContent()[0].getContent()[4].setValue().setEditable(true);
                this.BUDialog.getContent()[0].getContent()[6].setValue().setEditable(true);
                this.BUDialog.getContent()[0].getContent()[8].setSelectedKey(null);
                this.BUDialog.getContent()[0].getContent()[10].setSelectedKey(null);
                this.BUDialog.getContent()[0].getContent()[12].setSelectedKey(null);
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
                this.BUDialog.getContent()[0].getContent()[73].setSelectedIndex();
                this.BUDialog.getContent()[0].getContent()[75].setSelectedIndex();
                this.BUDialog.open();
            },
            onBUCreate: function (oEvent) {
                var oModel = this.getView().getModel();
                var BusinessUnit = this.BUDialog.getContent()[0].getContent()[2].getValue();
                var BuCode = this.BUDialog.getContent()[0].getContent()[4].getValue();
                var vertical = this.BUDialog.getContent()[0].getContent()[6].getValue();
                var isactive = this.BUDialog.getContent()[0].getContent()[75];
                var issnd = this.BUDialog.getContent()[0].getContent()[73];
                var childbusinessunit = this.BUDialog.getContent()[0].getContent()[8].getSelectedKey();
                if (BusinessUnit && BuCode && vertical) {
                    var buObj = {
                        "Businessunit": BusinessUnit,
                        "bucode": BuCode,
                        "vertical": vertical,
                        "childbusinessunit": childbusinessunit,
                        "currency": this.BUDialog.getContent()[0].getContent()[10].getSelectedKey(),
                        "erpsource": this.BUDialog.getContent()[0].getContent()[12].getSelectedKey(),
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
                    if (this.BU == "new") {
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
                        this.BUDialog.getModel().updateBindings();
                        this.BUDialog.close();
                    } else {
                        oModel.update("/ZDD_BusinessUnit_VH(Businessunit='" + encodeURIComponent(BusinessUnit) + "',bucode='" + encodeURIComponent(BuCode) + "',vertical='" + encodeURIComponent(vertical) + "')", buObj, {
                            // childbusinessunit='" + encodeURIComponent(childbusinessunit)
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.BUDialog.getModel().updateBindings();
                        this.BUDialog.close();
                    }
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
                this.BUDialog.setTitle("Edit Bank Master");
                this.BUDialog.open();
                var currency = evt.getSource().getBindingContext().getObject().currency;
                var Businessunit = evt.getSource().getBindingContext().getObject().Businessunit;
                var bucode = evt.getSource().getBindingContext().getObject().bucode;
                var vertical = evt.getSource().getBindingContext().getObject().vertical;
                var childbusinessunit = evt.getSource().getBindingContext().getObject().childbusinessunit;
                var erpsource = evt.getSource().getBindingContext().getObject().erpsource;
                var bushortcode = evt.getSource().getBindingContext().getObject().bushortcode;
                var trading = evt.getSource().getBindingContext().getObject().trading;
                var maxcreditlimitapplicable = evt.getSource().getBindingContext().getObject().maxcreditlimitapplicable;
                var maximumcreditdayslogic = evt.getSource().getBindingContext().getObject().maximumcreditdayslogic;
                var cc = evt.getSource().getBindingContext().getObject().cc;
                var ccemailid = evt.getSource().getBindingContext().getObject().ccemailid;
                var fa = evt.getSource().getBindingContext().getObject().fa;
                var faemailid = evt.getSource().getBindingContext().getObject().faemailid;
                var hof = evt.getSource().getBindingContext().getObject().hof;
                var hofemailid = evt.getSource().getBindingContext().getObject().hofemailid;
                var gm = evt.getSource().getBindingContext().getObject().gm;
                var gmemailid = evt.getSource().getBindingContext().getObject().gmemailid;
                var Ceo = evt.getSource().getBindingContext().getObject().Ceo;
                var ceoemailid = evt.getSource().getBindingContext().getObject().ceoemailid;
                var rf = evt.getSource().getBindingContext().getObject().rf;
                var rfemailid = evt.getSource().getBindingContext().getObject().rfemailid;
                var Cfr = evt.getSource().getBindingContext().getObject().Cfr;
                var cfremailid = evt.getSource().getBindingContext().getObject().cfremailid;
                var df = evt.getSource().getBindingContext().getObject().df;
                var dfemailid = evt.getSource().getBindingContext().getObject().dfemailid;
                var md = evt.getSource().getBindingContext().getObject().md;
                var mdemailid = evt.getSource().getBindingContext().getObject().mdemailid;
                var ed = evt.getSource().getBindingContext().getObject().ed;
                var edemailid = evt.getSource().getBindingContext().getObject().edemailid;
                var sb = evt.getSource().getBindingContext().getObject().sb;
                var sbemailid = evt.getSource().getBindingContext().getObject().sbemailid;
                var mdm = evt.getSource().getBindingContext().getObject().md;
                var mdmemailid = evt.getSource().getBindingContext().getObject().mdmemailid;
                var issnd = evt.getSource().getBindingContext().getObject().issnd;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.BUDialog.getContent()[0].getContent()[2].setValue(Businessunit).setEditable(false);
                this.BUDialog.getContent()[0].getContent()[4].setValue(bucode).setEditable(false);
                this.BUDialog.getContent()[0].getContent()[6].setValue(vertical).setEditable(false);
                this.BUDialog.getContent()[0].getContent()[8].setSelectedKey(childbusinessunit);
                this.BUDialog.getContent()[0].getContent()[10].setSelectedKey(currency);
                this.BUDialog.getContent()[0].getContent()[12].setSelectedKey(erpsource);
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
                var index = (isactive == 'Yes') ? 0 : 1;
                var index1 = (issnd == 'Yes') ? 0 : 1;
                this.BUDialog.getContent()[0].getContent()[73].setSelectedIndex(index1);
                this.BUDialog.getContent()[0].getContent()[75].setSelectedIndex(index);
            },
            handleAddBankMaster: function (oEvent) {
                this.BM = "new";
                this.bankMasterDlg.setTitle("Add New Bank Master");
                this.bankMasterDlg.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.bankMasterDlg.getContent()[0].getContent()[4].setValue();
                this.bankMasterDlg.getContent()[0].getContent()[6].setSelectedIndex();
                this.bankMasterDlg.getContent()[0].getContent()[8].setSelectedIndex();
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
                    if (this.BM == "new") {
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
                        this.bankMasterDlg.getModel().updateBindings();
                        this.bankMasterDlg.close();
                    } else {
                        oModel.update("/ZDD_BANK_VH('" + encodeURIComponent(bank) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.bankMasterDlg.getModel().updateBindings();
                        this.bankMasterDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditBankMaster: function (evt) {
                this.BM = "edit";
                this.bankMasterDlg.setTitle("Edit Bank Master");
                var bank = evt.getSource().getBindingContext().getObject().bank;
                var country = evt.getSource().getBindingContext().getObject().country;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                var isbank_with_condition = evt.getSource().getBindingContext().getObject().isbank_with_condition;
                this.bankMasterDlg.getContent()[0].getContent()[2].setValue(bank).setEditable(false);
                this.bankMasterDlg.getContent()[0].getContent()[4].setValue(country);
                var index = (isactive == 'Yes') ? 0 : 1;
                var index1 = (isbank_with_condition == 'Yes') ? 0 : 1;
                this.bankMasterDlg.getContent()[0].getContent()[6].setSelectedIndex(index);
                this.bankMasterDlg.getContent()[0].getContent()[8].setSelectedIndex(index1);
                this.bankMasterDlg.open();
            },
            onBankCancel: function (evt) {
                this.bankMasterDlg.close();
            },
            handleAddCM: function (evt) {
                this.CM = "new";
                this.channelMasterDlg.setTitle("Add New Channel Master");
                this.channelMasterDlg.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.channelMasterDlg.getContent()[0].getContent()[4].setSelectedIndex();
                this.channelMasterDlg.open();
            },
            onChannelMCreate: function (oEvent) {
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
                    if (this.CM == "new") {
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
                        this.channelMasterDlg.getModel().updateBindings();
                        this.channelMasterDlg.close();
                    } else {
                        oModel.update("/ZDD_Channel_VH('" + encodeURIComponent(channel) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.channelMasterDlg.getModel().updateBindings();
                        this.channelMasterDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditCM: function (evt) {
                this.CM = "edit";
                this.channelMasterDlg.setTitle("Edit Channel Master");
                var channel = evt.getSource().getBindingContext().getObject().channel;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.channelMasterDlg.getContent()[0].getContent()[2].setValue(channel).setEditable(false);
                var index = (isactive == '0') ? 0 : 1;
                this.channelMasterDlg.getContent()[0].getContent()[4].setSelectedIndex(index);
                this.channelMasterDlg.open();
            },
            onChannelMCancel: function (oEvent) {
                this.channelMasterDlg.close();
            },
            handleAddCG: function (oEvent) {
                this.CG = "new";
                this.channelGrpDlg.setTitle("Add New Channel Group");
                this.channelGrpDlg.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.channelGrpDlg.getContent()[0].getContent()[4].setSelectedIndex();
                this.channelGrpDlg.open();
            },
            onChannelGCreate: function (oEvent) {
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
                    if (this.CG == "new") {
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
                        this.channelGrpDlg.getModel().updateBindings();
                        this.channelGrpDlg.close();
                    } else {
                        oModel.update("/ZDD_ChannleGroup_VH('" + encodeURIComponent(channelGrp) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.channelGrpDlg.getModel().updateBindings();
                        this.channelGrpDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditCG: function (evt) {
                this.CG = "edit";
                this.channelGrpDlg.setTitle("Edit Channel Group");
                var channelgroup = evt.getSource().getBindingContext().getObject().channelgroup;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.channelGrpDlg.getContent()[0].getContent()[2].setValue(channelgroup).setEditable(false);
                var index = (isactive == 'Yes') ? 0 : 1;
                this.channelGrpDlg.getContent()[0].getContent()[4].setSelectedIndex(index);
                this.channelGrpDlg.open();
            },
            onChannelGCancel: function (oEvent) {
                this.channelGrpDlg.close();
            },
            handleAddViolation: function (oEvent) {
                this.violation = "new";
                this.violationDlg.setTitle("Add New Violation Master");
                this.violationDlg.getContent()[0].getContent()[2].setSelectedKey(null).setEnabled(true);
                this.violationDlg.getContent()[0].getContent()[4].setSelectedKey(null).setEnabled(true);
                this.violationDlg.getContent()[0].getContent()[6].setSelectedKey(null).setEnabled(true);
                this.violationDlg.getContent()[0].getContent()[8].setSelectedKey(null);
                this.violationDlg.getContent()[0].getContent()[10].setSelectedIndex();
                this.violationDlg.open();
            },
            handleViolationModel: function () {
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/ZDD_VIOLATION", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var i = 0; i < oData.results.length; i++) {
                            arr.push({
                                "businessunitname": oData.results[i].businessunitname,
                                "verticalname": oData.results[i].verticalname,
                                "violationtypename": oData.results[i].violationtypename
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "violationModel");
                        this.getView().getModel("violationModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
            },
            onViolationCreate: function (oEvent) {
                var oModel = this.getView().getModel();
                var businessUnitName = this.violationDlg.getContent()[0].getContent()[2].getSelectedKey();
                var verticalForm = this.violationDlg.getContent()[0].getContent()[4].getSelectedKey();
                var violationtypename = this.violationDlg.getContent()[0].getContent()[6].getSelectedKey();
                if (businessUnitName && verticalForm && violationtypename) {
                    var buObj = {
                        "businessunitname": businessUnitName,
                        "verticalname": verticalForm,
                        "violationtypename": violationtypename,
                        "rolename": this.violationDlg.getContent()[0].getContent()[8].getSelectedKey(),
                        "isactive": this.violationDlg.getContent()[0].getContent()[10].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.violationDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.violation == "new") {
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
                        this.violationDlg.getModel().updateBindings();
                        this.violationDlg.close();
                    } else {
                        oModel.update("/ZDD_VIOLATION(businessunitname='" + encodeURIComponent(businessUnitName) + "',verticalname='" + encodeURIComponent(verticalForm) + "',violationtypename='" + encodeURIComponent(violationtypename) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.violationDlg.getModel().updateBindings();
                        this.violationDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditViolation: function (evt) {
                this.violation = "edit";
                this.violationDlg.setTitle("Edit Violation Master");
                var businessunitname = evt.getSource().getBindingContext().getObject().businessunitname;
                var verticalname = evt.getSource().getBindingContext().getObject().verticalname;
                var violationtypename = evt.getSource().getBindingContext().getObject().violationtypename;
                var rolename = evt.getSource().getBindingContext().getObject().rolename;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.violationDlg.getContent()[0].getContent()[2].setSelectedKey(businessunitname).setEnabled(false);
                this.violationDlg.getContent()[0].getContent()[4].setSelectedKey(verticalname).setEnabled(false);
                this.violationDlg.getContent()[0].getContent()[6].setSelectedKey(violationtypename).setEnabled(false);
                this.violationDlg.getContent()[0].getContent()[8].setSelectedKey(rolename);
                var index = (isactive == 'Yes') ? 0 : 1;
                this.violationDlg.getContent()[0].getContent()[10].setSelectedIndex(index);
                this.violationDlg.open();
            },
            onViolationCancel: function (oEvent) {
                this.violationDlg.close();
            },
            handleAddSC: function (oEvent) {
                this.SC = "new";
                this.subChannelDlg.setTitle("Add New Sub Channel");
                this.subChannelDlg.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.subChannelDlg.getContent()[0].getContent()[4].setSelectedIndex();
                this.subChannelDlg.open();
            },
            onSubChannelCreate: function (oEvent) {
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
                    if (this.SC == "new") {
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
                        this.subChannelDlg.getModel().updateBindings();
                        this.subChannelDlg.close();
                    } else {
                        oModel.update("/ZDD_SubChannel_VH('" + encodeURIComponent(subChannel) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.subChannelDlg.getModel().updateBindings();
                        this.subChannelDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditSC: function (evt) {
                this.SC = "edit";
                this.subChannelDlg.setTitle("Edit Sub Channel");
                var subchannel = evt.getSource().getBindingContext().getObject().subchannel;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.subChannelDlg.getContent()[0].getContent()[2].setValue(subchannel).setEditable(false);
                var index = (isactive == 'Yes') ? 0 : 1;
                this.subChannelDlg.getContent()[0].getContent()[4].setSelectedIndex(index);
                this.subChannelDlg.open();
            },
            onSubChannelCancel: function (oEvent) {
                this.subChannelDlg.close();
            },
            handleAddReminder: function (oEvent) {
                this.Reminder = "new";
                this.reminderDlg.setTitle("Add New Reminder Master");
                this.reminderDlg.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.reminderDlg.getContent()[0].getContent()[4].setValue();
                // this.reminderDlg.getContent()[0].getContent()[6].setSelectedKey("");
                // this.reminderDlg.getContent()[0].getContent()[8].setSelectedKey(undefined);
                // this.reminderDlg.getContent()[0].getContent()[10].setSelectedKey(null);
                // this.reminderDlg.getContent()[0].getContent()[12].setSelectedKey(null);
                this.reminderDlg.getContent()[0].getContent()[6].setForceSelection(false);
                this.reminderDlg.getContent()[0].getContent()[8].setForceSelection(false);
                this.reminderDlg.getContent()[0].getContent()[10].setForceSelection(false);
                this.reminderDlg.getContent()[0].getContent()[12].setForceSelection(false);
                this.violationDlg.getContent()[0].getContent()[10].setSelectedIndex();
                this.reminderDlg.open();
            },
            handleReminderModel: function () {
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/ZDD_REMINDER", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var i = 0; i < oData.results.length; i++) {
                            arr.push({
                                "toroles": oData.results[i].toroles,
                                "ccroles": oData.results[i].ccroles,
                                "status": oData.results[i].status,
                                "emailtemplatebody": oData.results[i].emailtemplatebody
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "ReminderModel");
                        this.getView().getModel("ReminderModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
            },
            onReminderCreate: function (oEvent) {
                var oModel = this.getView().getModel();
                var Title = this.reminderDlg.getContent()[0].getContent()[2].getValue();
                if (Title) {
                    var buObj = {
                        "title": Title,
                        "daysno": this.reminderDlg.getContent()[0].getContent()[4].getValue(),
                        "toroles": this.reminderDlg.getContent()[0].getContent()[6].getSelectedKey(),
                        "ccroles": this.reminderDlg.getContent()[0].getContent()[8].getSelectedKey(),
                        "status": this.reminderDlg.getContent()[0].getContent()[10].getSelectedKey(),
                        "emailtemplatebody": this.reminderDlg.getContent()[0].getContent()[12].getSelectedKey(),
                        "isactive": this.reminderDlg.getContent()[0].getContent()[14].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.reminderDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.Reminder == "new") {
                        oModel.create("/ZDD_REMINDER", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Reminder added successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.reminderDlg.getModel().updateBindings();
                        this.reminderDlg.close();
                    } else {
                        oModel.update("/ZDD_REMINDER('" + encodeURIComponent(Title) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.reminderDlg.getModel().updateBindings();
                        this.reminderDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditReminder: function (evt) {
                this.Reminder = "edit";
                this.reminderDlg.setTitle("Edit Reminder Master");
                var title = evt.getSource().getBindingContext().getObject().title;
                var daysno = evt.getSource().getBindingContext().getObject().daysno;
                var toroles = evt.getSource().getBindingContext().getObject().toroles;
                var ccroles = evt.getSource().getBindingContext().getObject().ccroles;
                var status = evt.getSource().getBindingContext().getObject().status;
                var emailtemplatebody = atob(evt.getSource().getBindingContext().getObject().emailtemplatebody);
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.reminderDlg.getContent()[0].getContent()[2].setValue(title).setEditable(false);
                this.reminderDlg.getContent()[0].getContent()[4].setValue(daysno);
                this.reminderDlg.getContent()[0].getContent()[6].setSelectedKey(toroles);
                this.reminderDlg.getContent()[0].getContent()[8].setSelectedKey(ccroles);
                this.reminderDlg.getContent()[0].getContent()[10].setSelectedKey(status);
                this.reminderDlg.getContent()[0].getContent()[12].setSelectedKey(emailtemplatebody);
                var index = (isactive == 'Yes') ? 0 : 1;
                this.violationDlg.getContent()[0].getContent()[10].setSelectedIndex(index);
                this.reminderDlg.open();
            },
            handleEmlTemp: function (evt) {
                this.popOver.openBy(evt.getSource());
                this.emlTmplt = evt.getSource().getBindingContext().getObject().title;
                this.emlTempltModel();
            },
            emlTempltModel: function () {
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/ZDD_REMINDER", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var i = 0; i < oData.results.length; i++) {
                            if (this.emlTmplt == oData.results[i].title)
                                arr.push({
                                    "emailtemplatebody": atob(oData.results[i].emailtemplatebody)
                                });
                        }
                        var templateSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(templateSetModel, "templateModel");
                        this.getView().getModel("templateModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
            },
            handleCloseButton: function (evt) {
                this.popOver.close();
                //this.byId("myPopover").close();
            },

            onReminderCancel: function (oEvent) {
                this.reminderDlg.close();
            },
            handleAddVertical: function (oEvent) {
                this.vertical = "new";
                this.verticalDlg.setTitle("Add New Vertical Master");
                this.verticalDlg.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.verticalDlg.getContent()[0].getContent()[4].setValue();
                this.verticalDlg.getContent()[0].getContent()[6].setValue();
                this.verticalDlg.getContent()[0].getContent()[8].setSelectedIndex();
                this.verticalDlg.getContent()[0].getContent()[10].setSelectedIndex();
                this.verticalDlg.getContent()[0].getContent()[12].setSelectedIndex();
                this.verticalDlg.open();
            },
            onVerticalCreate: function (oEvent) {
                var oModel = this.getView().getModel();
                var vertical = this.verticalDlg.getContent()[0].getContent()[2].getValue();
                var isactive = this.verticalDlg.getContent()[0].getContent()[10].getSelectedButton().getText();
                var iscash = this.verticalDlg.getContent()[0].getContent()[12].getSelectedButton().getText();
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
                    if (this.vertical == "new") {
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
                        this.verticalDlg.getModel().updateBindings();
                        this.verticalDlg.close();
                    } else {
                        oModel.update("/ZDD_Vertical_VH('" + encodeURIComponent(vertical) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.verticalDlg.getModel().updateBindings();
                        this.verticalDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditVertical: function (evt) {
                this.vertical = "edit";
                this.verticalDlg.setTitle("Edit Vertical Master");
                var vertical = evt.getSource().getBindingContext().getObject().vertical;
                var verticaldescription = evt.getSource().getBindingContext().getObject().verticaldescription;
                var mdapprovalrequired = evt.getSource().getBindingContext().getObject().mdapprovalrequired;
                var sitevisitcompulsion = evt.getSource().getBindingContext().getObject().sitevisitcompulsion;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                var iscash = evt.getSource().getBindingContext().getObject().iscash;
                this.verticalDlg.getContent()[0].getContent()[2].setValue(vertical).setEditable(false);
                this.verticalDlg.getContent()[0].getContent()[4].setValue(verticaldescription);
                this.verticalDlg.getContent()[0].getContent()[6].setValue(mdapprovalrequired);
                var index = (isactive == 'Yes') ? 0 : 1;
                var index1 = (iscash == 'Yes') ? 0 : 1;
                var index3 = (sitevisitcompulsion == 'Yes') ? 0 : 1;
                this.verticalDlg.getContent()[0].getContent()[8].setSelectedIndex(index3);
                this.verticalDlg.getContent()[0].getContent()[10].setSelectedIndex(index);
                this.verticalDlg.getContent()[0].getContent()[12].setSelectedIndex(index1);
                this.verticalDlg.open();
            },
            onVerticalCancel: function (oEvent) {
                this.verticalDlg.close();
            },
            handleAddDOAMaster: function (oEvent) {
                this.DOA = "new";
                this.DOAMasterDlg.setTitle("Add New DOA Master");
                this.DOAMasterDlg.getContent()[0].getContent()[2].setSelectedKey(null).setEnabled(true);
                this.DOAMasterDlg.getContent()[0].getContent()[4].setSelectedKey(null).setEnabled(true);
                this.DOAMasterDlg.getContent()[0].getContent()[6].setSelectedKey(null).setEnabled(true);
                this.DOAMasterDlg.getContent()[0].getContent()[8].setSelectedKey(null).setEnabled(true);
                this.DOAMasterDlg.getContent()[0].getContent()[10].setSelectedKey(null).setEnabled(true);
                this.DOAMasterDlg.getContent()[0].getContent()[12].setValue().setEditable(true);
                this.DOAMasterDlg.getContent()[0].getContent()[14].setValue().setEditable(true);
                this.DOAMasterDlg.getContent()[0].getContent()[17].setSelectedKey(null).setEnabled(true);
                this.DOAMasterDlg.getContent()[0].getContent()[19].setSelectedIndex();
                this.DOAMasterDlg.getContent()[0].getContent()[21].setValue("");
                this.DOAMasterDlg.getContent()[0].getContent()[23].setValue("");
                this.DOAMasterDlg.getContent()[0].getContent()[25].setSelectedIndex();
                this.DOAMasterDlg.open();
            },
            handleDOAModel: function () {
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/ZDD_DELEGATION_VH", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var i = 0; i < oData.results.length; i++) {
                            arr.push({
                                "customertype": oData.results[i].customertype,
                                "class": oData.results[i].class,
                                "credittype": oData.results[i].credittype,
                                "businessunit": oData.results[i].businessunit,
                                "vertical": oData.results[i].vertical,
                                "lastselectedrole": oData.results[i].lastselectedrole
                            });
                        }
                        arr.unshift({
                            "class": ""
                        });
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "DOAModel");
                        this.getView().getModel("DOAModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
            },
            onDOACreate: function (oEvent) {
                var oModel = this.getView().getModel();
                var customerType = this.DOAMasterDlg.getContent()[0].getContent()[2].getSelectedKey();
                var classTyp = this.DOAMasterDlg.getContent()[0].getContent()[4].getSelectedKey();
                var CreditType = this.DOAMasterDlg.getContent()[0].getContent()[6].getSelectedKey();
                var BusinessUnit = this.DOAMasterDlg.getContent()[0].getContent()[8].getSelectedKey();
                var Vertical = this.DOAMasterDlg.getContent()[0].getContent()[10].getSelectedKey();
                var minimumcreditlimit = this.DOAMasterDlg.getContent()[0].getContent()[12].getValue();
                var maximumcreditlimit = this.DOAMasterDlg.getContent()[0].getContent()[14].getValue();
                var lastselectedrole = this.DOAMasterDlg.getContent()[0].getContent()[17].getSelectedKey();
                if (customerType && classTyp && CreditType && BusinessUnit && Vertical && minimumcreditlimit && maximumcreditlimit) {
                    var buObj = {
                        "customertype": customerType,
                        "class": classTyp,
                        "credittype": CreditType,
                        "businessunit": BusinessUnit,
                        "vertical": Vertical,
                        "minimumcreditlimit": minimumcreditlimit,
                        "maximumcreditlimit": maximumcreditlimit,
                        "lastselectedrole": lastselectedrole,
                        "iscad": this.DOAMasterDlg.getContent()[0].getContent()[19].getSelectedButton().getText(),
                        "roletype": this.DOAMasterDlg.getContent()[0].getContent()[21].getValue(),
                        "informativerole": this.DOAMasterDlg.getContent()[0].getContent()[23].getValue(),
                        "isactive": this.DOAMasterDlg.getContent()[0].getContent()[25].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.DOAMasterDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.DOA == "new") {
                        oModel.create("/ZDD_DELEGATION_VH", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("DOA Master added successfully");
                                this.handleDOAModel();
                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.DOAMasterDlg.getModel().updateBindings();
                        this.DOAMasterDlg.close();
                    } else {
                        oModel.update("/ZDD_DELEGATION_VH(customertype='" + encodeURIComponent(customerType) + "',class='" + encodeURIComponent(classTyp) + "',credittype='" + encodeURIComponent(CreditType) + "',businessunit='" + encodeURIComponent(BusinessUnit) + "',vertical='" + encodeURIComponent(Vertical) + "',minimumcreditlimit=" + minimumcreditlimit + ",maximumcreditlimit=" + maximumcreditlimit + ",lastselectedrole='" + encodeURIComponent(lastselectedrole) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");
                                this.handleDOAModel();
                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.DOAMasterDlg.getModel().updateBindings();
                        this.DOAMasterDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditDOAMaster: function (evt) {
                this.DOA = "edit";
                this.DOAMasterDlg.setTitle("Edit DOA Master");
                var customertype = evt.getSource().getBindingContext().getObject().customertype;
                var classTyp = evt.getSource().getBindingContext().getObject().class;
                var credittype = evt.getSource().getBindingContext().getObject().credittype;
                var businessunit = evt.getSource().getBindingContext().getObject().businessunit;
                var vertical = evt.getSource().getBindingContext().getObject().vertical;
                var minimumcreditlimit = evt.getSource().getBindingContext().getObject().minimumcreditlimit;
                var maximumcreditlimit = evt.getSource().getBindingContext().getObject().maximumcreditlimit;
                var lastselectedrole = evt.getSource().getBindingContext().getObject().lastselectedrole;
                var iscad = evt.getSource().getBindingContext().getObject().iscad;
                var roletype = evt.getSource().getBindingContext().getObject().roletype;
                var informativerole = evt.getSource().getBindingContext().getObject().informativerole;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                var iscad = evt.getSource().getBindingContext().getObject().iscad;
                var index = (iscad == 'Yes') ? 0 : 1;
                var index2 = (isactive == 'Yes') ? 0 : 1;
                this.DOAMasterDlg.getContent()[0].getContent()[2].setSelectedKey(customertype).setEnabled(false);
                this.DOAMasterDlg.getContent()[0].getContent()[4].setSelectedKey(classTyp).setEnabled(false);
                this.DOAMasterDlg.getContent()[0].getContent()[6].setSelectedKey(credittype).setEnabled(false);
                this.DOAMasterDlg.getContent()[0].getContent()[8].setSelectedKey(businessunit).setEnabled(false);
                this.DOAMasterDlg.getContent()[0].getContent()[10].setSelectedKey(vertical).setEnabled(false);
                this.DOAMasterDlg.getContent()[0].getContent()[12].setValue(minimumcreditlimit).setEditable(false);
                this.DOAMasterDlg.getContent()[0].getContent()[14].setValue(maximumcreditlimit).setEditable(false);
                this.DOAMasterDlg.getContent()[0].getContent()[17].setSelectedKey(lastselectedrole).setEnabled(false);
                this.DOAMasterDlg.getContent()[0].getContent()[19].setSelectedIndex(index);
                this.DOAMasterDlg.getContent()[0].getContent()[21].setValue(roletype);
                this.DOAMasterDlg.getContent()[0].getContent()[23].setValue(informativerole);
                this.DOAMasterDlg.getContent()[0].getContent()[25].setSelectedIndex(index2);
                this.DOAMasterDlg.open();
            },
            onDOACancel: function () {
                this.DOAMasterDlg.close();
            },
            handleAddDelegationTR: function () {
                this.Dtrading = "new";
                // debugger
                // this.getView().getModel("DelegationTRModel").getData().unshift({
                //     businessunit: "blankKey",
                // })
                this.DelegationTrDlg.setTitle("Add New Delegation Trading");
                this.DelegationTrDlg.getContent()[0].getContent()[2].setForceSelection(false).setEnabled(true);
                this.DelegationTrDlg.getContent()[0].getContent()[4].setForceSelection(false).setEnabled(true);
                this.DelegationTrDlg.getContent()[0].getContent()[6].setForceSelection(false).setEnabled(true);
                this.DelegationTrDlg.getContent()[0].getContent()[8].setEnabled(true).setForceSelection(false);
                this.DelegationTrDlg.getContent()[0].getContent()[10].setForceSelection(false).setEnabled(true);
                this.DelegationTrDlg.getContent()[0].getContent()[12].setForceSelection(false).setEnabled(true);
                this.DelegationTrDlg.getContent()[0].getContent()[14].setValue().setEditable(true);
                this.DelegationTrDlg.getContent()[0].getContent()[17].setValue().setEditable(true);
                this.DelegationTrDlg.getContent()[0].getContent()[19].setValue().setEditable(true);
                this.DelegationTrDlg.getContent()[0].getContent()[21].setValue().setEditable(true);
                this.DelegationTrDlg.getContent()[0].getContent()[23].setForceSelection(false).setEnabled(true);
                this.DelegationTrDlg.getContent()[0].getContent()[25].setValue();
                this.DelegationTrDlg.getContent()[0].getContent()[27].setValue();
                this.DelegationTrDlg.getContent()[0].getContent()[29].setSelectedIndex();
                this.DelegationTrDlg.getContent()[0].getContent()[31].setSelectedIndex();
                this.DelegationTrDlg.open();
            },
            handleDelgTrdngModel: function () {
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/ZDD_DELEGATION_TR_VH", {
                    success: function (oData, oResponse) {
                        var arr = [];
                        for (var i = 0; i < oData.results.length; i++) {
                            arr.push({
                                "segment": oData.results[i].segment,
                                "lastselectedrole": oData.results[i].lastselectedrole,
                                "businessunit": oData.results[i].businessunit
                            });
                        }
                        var headerSetModel = new sap.ui.model.json.JSONModel(arr);
                        this.getView().setModel(headerSetModel, "DelegationTRModel");
                        this.getView().getModel("DelegationTRModel").updateBindings();

                    }.bind(this),
                    error: function (oError) {
                        jQuery.sap.require("sap.m.MessageBox");
                        sap.m.MessageBox.error(oError.message);
                    }
                });
            },
            onDelegationTRCreate: function () {
                var oModel = this.getView().getModel();
                var customerType = this.DelegationTrDlg.getContent()[0].getContent()[2].getSelectedKey();
                var classTyp = this.DelegationTrDlg.getContent()[0].getContent()[6].getSelectedKey();
                var CreditType = this.DelegationTrDlg.getContent()[0].getContent()[4].getSelectedKey();
                var BusinessUnit = this.DelegationTrDlg.getContent()[0].getContent()[8].getSelectedKey();
                var Vertical = this.DelegationTrDlg.getContent()[0].getContent()[10].getSelectedKey();
                var segment = this.DelegationTrDlg.getContent()[0].getContent()[12].getSelectedKey();
                var minimumQtylimit = this.DelegationTrDlg.getContent()[0].getContent()[14].getValue();
                var maximumQtylimit = this.DelegationTrDlg.getContent()[0].getContent()[17].getValue();
                var minimumcValuelimit = this.DelegationTrDlg.getContent()[0].getContent()[19].getValue();
                var maximumValuelimit = this.DelegationTrDlg.getContent()[0].getContent()[21].getValue();
                if (customerType && classTyp && CreditType && BusinessUnit && Vertical && segment && minimumQtylimit && maximumQtylimit && minimumcValuelimit && maximumValuelimit) {
                    var buObj = {
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
                        "lastselectedrole": this.DelegationTrDlg.getContent()[0].getContent()[23].getSelectedKey(),
                        "roletype": this.DelegationTrDlg.getContent()[0].getContent()[25].getValue(),
                        "informativerole": this.DelegationTrDlg.getContent()[0].getContent()[27].getValue(),
                        "iscad": this.DelegationTrDlg.getContent()[0].getContent()[29].getSelectedButton().getText(),
                        "isactive": this.DelegationTrDlg.getContent()[0].getContent()[31].getSelectedButton().getText(),
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.DelegationTrDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.Dtrading == "new") {
                        oModel.create("/ZDD_DELEGATION_TR_VH", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Delegation Trading added successfully");
                                this.handleDelgTrdngModel();

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.handleDelgTrdngModel();
                        this.DelegationTrDlg.close();
                    } else {
                        debugger
                        oModel.update("/ZDD_DELEGATION_TR_VH(customertype='" + encodeURIComponent(customerType) + "',creditlimittype='" + encodeURIComponent(CreditType) + "',classtype='" + encodeURIComponent(classTyp) + "',businessunit='" + encodeURIComponent(BusinessUnit) + "',vertical='" + encodeURIComponent(Vertical) + "',segment='" + encodeURIComponent(segment) + "',minimumquantitylimit=" + minimumQtylimit + ",maximumquantitylimit=" + maximumQtylimit + ",minimumvaluelimit=" + minimumcValuelimit + ",maximumvaluelimit=" + maximumValuelimit + ")", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");
                                this.handleDelgTrdngModel();
                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.handleDelgTrdngModel();
                        this.DelegationTrDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditDelegationTR: function (evt) {
                this.Dtrading = "edit";
                this.DelegationTrDlg.setTitle("Edit Delegation Trading");
                var customertype = evt.getSource().getBindingContext().getObject().customertype;
                var creditlimittype = evt.getSource().getBindingContext().getObject().creditlimittype;
                var classtype = evt.getSource().getBindingContext().getObject().classtype;
                var businessunit = evt.getSource().getBindingContext().getObject().businessunit;
                var vertical = evt.getSource().getBindingContext().getObject().vertical;
                var segment = evt.getSource().getBindingContext().getObject().segment;
                var minimumquantitylimit = evt.getSource().getBindingContext().getObject().minimumquantitylimit;
                var maximumquantitylimit = evt.getSource().getBindingContext().getObject().maximumquantitylimit;
                var minimumvaluelimit = evt.getSource().getBindingContext().getObject().minimumvaluelimit;
                var maximumvaluelimit = evt.getSource().getBindingContext().getObject().maximumvaluelimit;
                var lastselectedrole = evt.getSource().getBindingContext().getObject().lastselectedrole;
                var roletype = evt.getSource().getBindingContext().getObject().roletype;
                var informativerole = evt.getSource().getBindingContext().getObject().informativerole;
                var iscad = evt.getSource().getBindingContext().getObject().iscad;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.DelegationTrDlg.getContent()[0].getContent()[2].setSelectedKey(customertype).setEnabled(false);
                this.DelegationTrDlg.getContent()[0].getContent()[4].setSelectedKey(creditlimittype).setEnabled(false);
                this.DelegationTrDlg.getContent()[0].getContent()[6].setSelectedKey(classtype).setEnabled(false);
                this.DelegationTrDlg.getContent()[0].getContent()[8].setSelectedKey(businessunit).setEnabled(false);
                this.DelegationTrDlg.getContent()[0].getContent()[10].setSelectedKey(vertical).setEnabled(false);
                this.DelegationTrDlg.getContent()[0].getContent()[12].setSelectedKey(segment).setEnabled(false);
                this.DelegationTrDlg.getContent()[0].getContent()[14].setValue(minimumquantitylimit).setEditable(false);
                this.DelegationTrDlg.getContent()[0].getContent()[17].setValue(maximumquantitylimit).setEditable(false);
                this.DelegationTrDlg.getContent()[0].getContent()[19].setValue(minimumvaluelimit).setEditable(false);
                this.DelegationTrDlg.getContent()[0].getContent()[21].setValue(maximumvaluelimit).setEditable(false);
                this.DelegationTrDlg.getContent()[0].getContent()[23].setSelectedKey(lastselectedrole).setEnabled(true);
                this.DelegationTrDlg.getContent()[0].getContent()[25].setValue(roletype);
                this.DelegationTrDlg.getContent()[0].getContent()[27].setValue(informativerole);
                var index = (iscad == 'Yes') ? 0 : 1;
                var index2 = (isactive == 'Yes') ? 0 : 1;
                this.DelegationTrDlg.getContent()[0].getContent()[29].setSelectedIndex(index);
                this.DelegationTrDlg.getContent()[0].getContent()[31].setSelectedIndex(index2);
                this.DelegationTrDlg.open();
            },
            onDelegationTRCancel: function () {
                this.DelegationTrDlg.close();
            },
            handleAddCDPD: function () {
                this.CDPD = "new";
                this.CDPDDialog.setTitle("Add New Credit Days Per Domestic");
                this.CDPDDialog.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.CDPDDialog.getContent()[0].getContent()[4].setValue().setEditable(true);
                this.CDPDDialog.getContent()[0].getContent()[6].setValue();
                this.CDPDDialog.getContent()[0].getContent()[8].setValue();
                this.CDPDDialog.getContent()[0].getContent()[10].setValue();
                this.CDPDDialog.getContent()[0].getContent()[12].setValue();
                this.CDPDDialog.getContent()[0].getContent()[14].setValue();
                this.CDPDDialog.getContent()[0].getContent()[16].setSelectedKey(null);
                this.CDPDDialog.getContent()[0].getContent()[18].setSelectedKey(null);
                this.CDPDDialog.getContent()[0].getContent()[20].setSelectedIndex();
                this.CDPDDialog.getContent()[0].getContent()[22].setSelectedIndex();
                this.CDPDDialog.open();
            },
            onCDPDCreate: function () {
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
                        "businessunit": this.CDPDDialog.getContent()[0].getContent()[14].getSelectedKey(),
                        "vertical": this.CDPDDialog.getContent()[0].getContent()[16].getSelectedKey(),
                        "doarole": this.CDPDDialog.getContent()[0].getContent()[18].getValue(),
                        "isproxima": this.CDPDDialog.getContent()[0].getContent()[20].getSelectedButton().getText(),
                        "isactive": this.CDPDDialog.getContent()[0].getContent()[22].getSelectedButton().getText()
                    }
                    var postObj = {
                        "d": buObj
                    };
                    this.CDPDDialog.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.CDPD == "new") {
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
                        this.CDPDDialog.getModel().updateBindings();
                        this.CDPDDialog.close();
                    } else {
                        oModel.update("/ZDD_CREDIT_DOM_VH(srno='" + encodeURIComponent(srno) + "',channel='" + encodeURIComponent(channel) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.CDPDDialog.getModel().updateBindings();
                        this.CDPDDialog.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditCDPD: function (evt) {
                this.CDPD = "edit";
                this.CDPDDialog.setTitle("Edit Credit Days Per Domestic");
                var srno = evt.getSource().getBindingContext().getObject().srno;
                var channel = evt.getSource().getBindingContext().getObject().channel;
                var subchannel = evt.getSource().getBindingContext().getObject().subchannel;
                var lineofbusinesstype = evt.getSource().getBindingContext().getObject().lineofbusinesstype;
                var classtype = evt.getSource().getBindingContext().getObject().classtype;
                var maximumcreditdays = evt.getSource().getBindingContext().getObject().maximumcreditdays;
                var businessunit = evt.getSource().getBindingContext().getObject().businessunit;
                var vertical = evt.getSource().getBindingContext().getObject().vertical;
                var doarole = evt.getSource().getBindingContext().getObject().doarole;
                var isproxima = evt.getSource().getBindingContext().getObject().isproxima;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.CDPDDialog.getContent()[0].getContent()[2].setValue(srno).setEditable(false);
                this.CDPDDialog.getContent()[0].getContent()[4].setValue(channel).setEditable(false);
                this.CDPDDialog.getContent()[0].getContent()[6].setValue(subchannel);
                this.CDPDDialog.getContent()[0].getContent()[8].setValue(lineofbusinesstype);
                this.CDPDDialog.getContent()[0].getContent()[10].setValue(classtype);
                this.CDPDDialog.getContent()[0].getContent()[12].setValue(maximumcreditdays);
                this.CDPDDialog.getContent()[0].getContent()[14].setSelectedKey(businessunit);
                this.CDPDDialog.getContent()[0].getContent()[16].setSelectedKey(vertical);
                this.CDPDDialog.getContent()[0].getContent()[18].setValue(doarole);
                var index = (isproxima == 'Yes') ? 0 : 1;
                var index2 = (isactive == 'Yes') ? 0 : 1;
                this.CDPDDialog.getContent()[0].getContent()[20].setSelectedIndex(index);
                this.CDPDDialog.getContent()[0].getContent()[22].setSelectedIndex(index2);
                this.CDPDDialog.open();
            },
            onCDPDCancel: function () {
                this.CDPDDialog.close();
            },
            handleAddLegalStatus: function (evt) {
                this.leglSttus = "new";
                this.legalStatsDlg.setTitle("Add New Legal Status");
                this.legalStatsDlg.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.legalStatsDlg.getContent()[0].getContent()[4].setSelectedIndex();
                this.legalStatsDlg.getContent()[0].getContent()[6].setSelectedIndex();
                this.legalStatsDlg.getContent()[0].getContent()[8].setSelectedIndex();
                this.legalStatsDlg.getContent()[0].getContent()[10].setSelectedIndex();
                this.legalStatsDlg.open();
            },
            onlegalStatusCreate: function () {
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
                    this.legalStatsDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.leglSttus == "new") {
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
                        this.legalStatsDlg.getModel().updateBindings();
                        this.legalStatsDlg.close();
                    } else {
                        oModel.update("/ZDD_LEGAL_STATUS_VH('" + encodeURIComponent(legalStatus) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.legalStatsDlg.getModel().updateBindings();
                        this.legalStatsDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditLegalStatus: function (evt) {
                this.leglSttus = "edit";
                this.legalStatsDlg.setTitle("Edit Legal Status");
                var Legalstatus = evt.getSource().getBindingContext().getObject().Legalstatus;
                var Iscompany = evt.getSource().getBindingContext().getObject().Iscompany;
                var Ispartnership = evt.getSource().getBindingContext().getObject().Ispartnership;
                var Isowner = evt.getSource().getBindingContext().getObject().Isowner;
                var Isactive = evt.getSource().getBindingContext().getObject().Isactive;
                this.legalStatsDlg.getContent()[0].getContent()[2].setValue(Legalstatus).setEditable(false);
                var index = (Iscompany == 'Yes') ? 0 : 1;
                var index1 = (Ispartnership == 'Yes') ? 0 : 1;
                var index2 = (Isowner == 'Yes') ? 0 : 1;
                var index3 = (Isactive == 'Yes') ? 0 : 1;
                this.legalStatsDlg.getContent()[0].getContent()[4].setSelectedIndex(index);
                this.legalStatsDlg.getContent()[0].getContent()[6].setSelectedIndex(index1);
                this.legalStatsDlg.getContent()[0].getContent()[8].setSelectedIndex(index2);
                this.legalStatsDlg.getContent()[0].getContent()[10].setSelectedIndex(index3);
                this.legalStatsDlg.open();
            },
            onlegalStatusCancel: function () {
                this.legalStatsDlg.close();
            },
            handleAddLOBT: function () {
                this.LOBT = "new";
                this.lineOfBsnsDlg.setTitle("Add New Line Of Business Type");
                this.lineOfBsnsDlg.getContent()[0].getContent()[2].setSelectedKey(null).setEnabled(true);
                this.lineOfBsnsDlg.getContent()[0].getContent()[4].setSelectedKey(null).setEnabled(true);
                this.lineOfBsnsDlg.getContent()[0].getContent()[6].setSelectedKey(null).setEnabled(true);
                this.lineOfBsnsDlg.getContent()[0].getContent()[8].setValue().setEditable(true);
                this.lineOfBsnsDlg.getContent()[0].getContent()[10].setSelectedIndex();
                this.lineOfBsnsDlg.open();
            },
            onLOBTCreate: function () {
                var oModel = this.getView().getModel();
                var channelgroup = this.lineOfBsnsDlg.getContent()[0].getContent()[2].getSelectedKey();
                var channel = this.lineOfBsnsDlg.getContent()[0].getContent()[4].getSelectedKey();
                var subchannel = this.lineOfBsnsDlg.getContent()[0].getContent()[6].getSelectedKey();
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
                    if (this.LOBT == "new") {
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
                        this.lineOfBsnsDlg.getModel().updateBindings();
                        this.lineOfBsnsDlg.close();
                    } else {
                        oModel.update("/zdd_lineofbusiness_vh(channelgroup='" + encodeURIComponent(channelgroup) + "',channel='" + encodeURIComponent(channel) + "',subchannel='" + encodeURIComponent(subchannel) + "',lineofbusinesstype='" + encodeURIComponent(lineofbusinesstype) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.lineOfBsnsDlg.getModel().updateBindings();
                        this.lineOfBsnsDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditLOBT: function (evt) {
                this.LOBT = "edit";
                this.lineOfBsnsDlg.setTitle("Edit Line Of Business Type");
                var channelgroup = evt.getSource().getBindingContext().getObject().channelgroup;
                var channel = evt.getSource().getBindingContext().getObject().channel;
                var subchannel = evt.getSource().getBindingContext().getObject().subchannel;
                var lineofbusinesstype = evt.getSource().getBindingContext().getObject().lineofbusinesstype;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.lineOfBsnsDlg.getContent()[0].getContent()[2].setSelectedKey(channelgroup).setEnabled(false);
                this.lineOfBsnsDlg.getContent()[0].getContent()[4].setSelectedKey(channel).setEnabled(false);
                this.lineOfBsnsDlg.getContent()[0].getContent()[6].setSelectedKey(subchannel).setEnabled(false);
                this.lineOfBsnsDlg.getContent()[0].getContent()[8].setValue(lineofbusinesstype).setEditable(false);
                var index = (isactive == 'Yes') ? 0 : 1;
                this.lineOfBsnsDlg.getContent()[0].getContent()[10].setSelectedIndex(index);
                this.lineOfBsnsDlg.open();
            },
            onLOBTCancel: function () {
                this.lineOfBsnsDlg.close();
            },
            handleAddPayTerms: function () {
                this.payTerms = "new";
                this.payTermsDlg.setTitle("Add New Payment Terms");
                this.payTermsDlg.getContent()[0].getContent()[2].setSelectedKey(null).setEnabled(true);
                this.payTermsDlg.getContent()[0].getContent()[4].setSelectedKey(null).setEnabled(true);
                this.payTermsDlg.getContent()[0].getContent()[6].setValue().setEditable(true);
                this.payTermsDlg.getContent()[0].getContent()[8].setSelectedIndex();
                this.payTermsDlg.getContent()[0].getContent()[10].setSelectedIndex();
                this.payTermsDlg.getContent()[0].getContent()[12].setSelectedIndex();
                this.payTermsDlg.open();
            },
            onPayTermCreate: function () {
                var oModel = this.getView().getModel();
                var customertype = this.payTermsDlg.getContent()[0].getContent()[2].getSelectedKey();
                var credittype = this.payTermsDlg.getContent()[0].getContent()[4].getSelectedKey();
                var paymentterm = this.payTermsDlg.getContent()[0].getContent()[6].getValue();
                var iscad = this.payTermsDlg.getContent()[0].getContent()[8].getSelectedButton();
                var tillsb = this.payTermsDlg.getContent()[0].getContent()[10].getSelectedButton();
                if (customertype && credittype && paymentterm) {
                    var buObj = {
                        "customertype": customertype,
                        "credittype": credittype,
                        "paymentterm": paymentterm,
                        "iscad": iscad.getText(),
                        "tillsb": tillsb.getText(),
                        "isactive": this.payTermsDlg.getContent()[0].getContent()[12].getSelectedButton().getText()
                    };
                    var postObj = {
                        "d": buObj
                    };
                    this.payTermsDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.payTerms == "new") {
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
                        this.payTermsDlg.getModel().updateBindings();
                        this.payTermsDlg.close();
                    }
                    else {
                        oModel.update("/zdd_paymentterm_vh(customertype='" + encodeURIComponent(customertype) + "',credittype='" + encodeURIComponent(credittype) + "',paymentterm='" + encodeURIComponent(paymentterm) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.payTermsDlg.getModel().updateBindings();
                        this.payTermsDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditPayTerms: function (evt) {
                this.payTerms = "edit";
                this.payTermsDlg.setTitle("Edit Payment Terms");
                var customertype = evt.getSource().getBindingContext().getObject().customertype;
                var credittype = evt.getSource().getBindingContext().getObject().credittype;
                var paymentterm = evt.getSource().getBindingContext().getObject().paymentterm;
                var iscad = evt.getSource().getBindingContext().getObject().iscad;
                var tillsb = evt.getSource().getBindingContext().getObject().tillsb;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.payTermsDlg.getContent()[0].getContent()[2].setSelectedKey(customertype).setEnabled(false);
                this.payTermsDlg.getContent()[0].getContent()[4].setSelectedKey(credittype).setEnabled(false);
                this.payTermsDlg.getContent()[0].getContent()[6].setValue(paymentterm).setEditable(false);
                var index = (iscad == 'Yes') ? 0 : 1;
                var index1 = (tillsb == 'Yes') ? 0 : 1;
                var index2 = (isactive == 'Yes') ? 0 : 1;
                this.payTermsDlg.getContent()[0].getContent()[8].setSelectedIndex(index);
                this.payTermsDlg.getContent()[0].getContent()[10].setSelectedIndex(index1);
                this.payTermsDlg.getContent()[0].getContent()[12].setSelectedIndex(index2);
                this.payTermsDlg.open();
            },
            onPayTermCancel: function () {
                this.payTermsDlg.close();
            },
            handleAddExpPayTerms: function () {
                debugger
                this.expPayTerms = "new";
                this.ExpPayTermsDlg.setTitle("Add New Export Payment Terms");
                this.ExpPayTermsDlg.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.ExpPayTermsDlg.getContent()[0].getContent()[4].setSelectedKey("").setEnabled(true);
                this.ExpPayTermsDlg.getContent()[0].getContent()[6].setSelectedKey("").setEnabled(true);
                this.ExpPayTermsDlg.getContent()[0].getContent()[8].setSelectedKey("").setEnabled(true);
                this.ExpPayTermsDlg.getContent()[0].getContent()[10].setValue();
                this.ExpPayTermsDlg.open();
            },
            onExpPayTermCreate: function () {
                debugger
                var oModel = this.getView().getModel();
                var paymentterm = this.ExpPayTermsDlg.getContent()[0].getContent()[2].getValue();
                var businessname = this.ExpPayTermsDlg.getContent()[0].getContent()[4].getSelectedKey();
                var vertical = this.ExpPayTermsDlg.getContent()[0].getContent()[6].getSelectedKey();
                var classT = this.ExpPayTermsDlg.getContent()[0].getContent()[8].getSelectedKey();
                var creditdays = this.ExpPayTermsDlg.getContent()[0].getContent()[10].getValue();
                if (paymentterm && businessname && vertical && classT) {
                    var buObj = {
                        "paymentterm": paymentterm,
                        "businessname": businessname,
                        "vertical": vertical,
                        "class": classT,
                        "creditdays": creditdays
                    };
                    var postObj = {
                        "d": buObj
                    };
                    debugger
                    this.ExpPayTermsDlg.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.expPayTerms == "new") {
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
                        this.ExpPayTermsDlg.getModel().updateBindings();
                        this.ExpPayTermsDlg.close();
                    } else {
                        oModel.update("/ZDD_EXP_PYTTERM_VH(paymentterm='" + encodeURIComponent(paymentterm) + "',businessname='" + encodeURIComponent(businessname) + "',vertical='" + encodeURIComponent(vertical) + "',class='" + encodeURIComponent(classT) + "')", buObj, {
                        // oModel.update("/ZDD_EXP_PYTTERM_VH(paymentterm='" + paymentterm + "',businessname='" + businessname + "',vertical='" + vertical + "',class='" + classT + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.ExpPayTermsDlg.getModel().updateBindings();
                        this.ExpPayTermsDlg.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditExpPayTerms: function (evt) {
                this.expPayTerms = "edit";
                this.ExpPayTermsDlg.setTitle("Edit Export Payment Terms");
                var paymentterm = evt.getSource().getBindingContext().getObject().paymentterm;
                var businessname = evt.getSource().getBindingContext().getObject().businessname;
                var vertical = evt.getSource().getBindingContext().getObject().vertical;
                var classT = evt.getSource().getBindingContext().getObject().class;
                var creditdays = evt.getSource().getBindingContext().getObject().creditdays;
                this.ExpPayTermsDlg.getContent()[0].getContent()[2].setValue(paymentterm).setEditable(false);
                this.ExpPayTermsDlg.getContent()[0].getContent()[4].setSelectedKey(businessname).setEnabled(false);
                this.ExpPayTermsDlg.getContent()[0].getContent()[6].setSelectedKey(vertical).setEnabled(false);
                this.ExpPayTermsDlg.getContent()[0].getContent()[8].setSelectedKey(classT).setEnabled(false);
                this.ExpPayTermsDlg.getContent()[0].getContent()[10].setValue(creditdays);
                this.ExpPayTermsDlg.open();
            },
            onExpPayTermCancel: function () {
                this.ExpPayTermsDlg.close();
            },
            handleAddCountry: function () {
                this.Ctry = "new";
                this.country.setTitle("Add New Country Master");
                this.country.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.country.getContent()[0].getContent()[4].setValue();
                this.country.getContent()[0].getContent()[6].setValue();
                this.country.getContent()[0].getContent()[8].setSelectedIndex();
                this.country.open();
            },
            onCountryCreate: function (evt) {
                var oModel = this.getView().getModel();
                var country = this.country.getContent()[0].getContent()[2].getValue();
                var code = this.country.getContent()[0].getContent()[4].getValue();
                var rating = this.country.getContent()[0].getContent()[6].getValue();
                if (country) {
                    var buObj = {
                        "country": country,
                        "code": code,
                        "rating": rating,
                        "isactive": this.country.getContent()[0].getContent()[8].getSelectedButton().getText()
                    };
                    var postObj = {
                        "d": buObj
                    };
                    this.country.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.Ctry == "new") {
                        oModel.create("/zdd_country_vh", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Country added successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.country.getModel().updateBindings();
                        this.country.close();
                    } else {
                        oModel.update("/zdd_country_vh('" + encodeURIComponent(country) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.country.getModel().updateBindings();
                        this.country.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditCountry: function (evt) {
                this.Ctry = "edit";
                this.country.setTitle("Edit Country Master");
                var country = evt.getSource().getBindingContext().getObject().country;
                var code = evt.getSource().getBindingContext().getObject().code;
                var rating = evt.getSource().getBindingContext().getObject().rating;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                this.country.getContent()[0].getContent()[2].setValue(country).setEditable(false);
                this.country.getContent()[0].getContent()[4].setValue(code);
                this.country.getContent()[0].getContent()[6].setValue(rating);
                var index = (isactive == 'Yes') ? 0 : 1;
                this.country.getContent()[0].getContent()[8].setSelectedIndex(index);
                this.country.open();
            },
            onCountryCancel: function (evt) {
                this.country.close();
            },
            handleAddRemarks: function (evt) {
                this.Rmrks = "new";
                this.remarks.setTitle("Add New Remarks");
                this.remarks.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.remarks.getContent()[0].getContent()[4].setSelectedIndex();
                this.remarks.getContent()[0].getContent()[6].setSelectedIndex();
                this.remarks.getContent()[0].getContent()[8].setSelectedIndex();
                this.remarks.getContent()[0].getContent()[10].setValue();
                this.remarks.getContent()[0].getContent()[12].setValue();
                this.remarks.getContent()[0].getContent()[14].setValue();
                this.remarks.getContent()[0].getContent()[16].setValue();
                this.remarks.open();
            },
            onRemarksCreate: function (evt) {
                var oModel = this.getView().getModel();
                var remarks = this.remarks.getContent()[0].getContent()[2].getValue();
                var createdDate = this.remarks.getContent()[0].getContent()[14].getValue();
                var modifieddate = this.remarks.getContent()[0].getContent()[16].getValue();
                if (remarks) {
                    var buObj = {
                        "remarks": remarks,
                        "isfreetext": this.remarks.getContent()[0].getContent()[4].getSelectedButton().getText(),
                        "isapplicableformdedsb": this.remarks.getContent()[0].getContent()[6].getSelectedButton().getText(),
                        "isactive": this.remarks.getContent()[0].getContent()[8].getSelectedButton().getText(),
                        "createdby": this.remarks.getContent()[0].getContent()[10].getValue(),
                        "modifiedby": this.remarks.getContent()[0].getContent()[12].getValue(),
                        "createddate": createdDate ? this.dateFormatter(createdDate) : null,
                        "modifieddate": modifieddate ? this.dateFormatter(modifieddate) : null
                    };
                    var postObj = {
                        "d": buObj
                    };
                    this.remarks.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.Rmrks == "new") {
                        oModel.create("/ZDD_REMARKS", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Remarks added successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.remarks.getModel().updateBindings();
                        this.remarks.close();
                    } else {
                        oModel.update("/ZDD_REMARKS('" + encodeURIComponent(remarks) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.remarks.getModel().updateBindings();
                        this.remarks.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            dateFormatter: function (value) {
                if (value) {
                    var sNotifDate = new Date(value.toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0];
                    return sNotifDate;
                } else return "";
            },
            handleEditRemarks: function (evt) {
                this.Rmrks = "edit";
                this.remarks.setTitle("Edit Remarks");
                var remarks = evt.getSource().getBindingContext().getObject().remarks;
                var isfreetext = evt.getSource().getBindingContext().getObject().isfreetext;
                var isapplicableformdedsb = evt.getSource().getBindingContext().getObject().isapplicableformdedsb;
                var isactive = evt.getSource().getBindingContext().getObject().isactive;
                var createdby = evt.getSource().getBindingContext().getObject().createdby;
                var modifiedby = evt.getSource().getBindingContext().getObject().modifiedby;
                var createddate = evt.getSource().getBindingContext().getObject().createddate;
                var modifieddate = evt.getSource().getBindingContext().getObject().modifieddate;
                var index = (isfreetext == 'Yes') ? 0 : 1;
                var index1 = (isapplicableformdedsb == 'Yes') ? 0 : 1;
                var index2 = (isactive == 'Yes') ? 0 : 1;
                this.remarks.getContent()[0].getContent()[2].setValue(remarks).setEditable(false);
                this.remarks.getContent()[0].getContent()[4].setSelectedIndex(index);
                this.remarks.getContent()[0].getContent()[6].setSelectedIndex(index1);
                this.remarks.getContent()[0].getContent()[8].setSelectedIndex(index2);
                this.remarks.getContent()[0].getContent()[10].setValue(createdby);
                this.remarks.getContent()[0].getContent()[12].setValue(modifiedby);
                this.remarks.getContent()[0].getContent()[14].setValue(createddate);
                this.remarks.getContent()[0].getContent()[16].setValue(modifieddate);
                this.remarks.open();
            },
            onRemarksCancel: function (evt) {
                this.remarks.close();
                //this.CredtManag.open();
            },
            handleAddCreditManag: function (evt) {
                this.CrdtMng = "new";
                this.CredtManag.setTitle("Add New Credit Management");
                this.CredtManag.getContent()[0].getContent()[2].setValue().setEditable(true);
                this.CredtManag.getContent()[0].getContent()[4].setValue().setEditable(true);
                this.CredtManag.getContent()[0].getContent()[6].setValue().setEditable(true);
                this.CredtManag.getContent()[0].getContent()[8].setValue();
                this.CredtManag.getContent()[0].getContent()[10].setValue();
                this.CredtManag.getContent()[0].getContent()[12].setValue();
                this.CredtManag.getContent()[0].getContent()[14].setValue();
                this.CredtManag.open();
            },
            onCreditManagCreate: function (evt) {
                var oModel = this.getView().getModel();
                var salesorganization = this.CredtManag.getContent()[0].getContent()[2].getValue();
                var distribution_channel = this.CredtManag.getContent()[0].getContent()[4].getValue();
                var division = this.CredtManag.getContent()[0].getContent()[6].getValue();
                if (salesorganization && distribution_channel && division) {
                    var buObj = {
                        "salesorganization": salesorganization,
                        "distribution_channel": distribution_channel,
                        "division": division,
                        "credit_control_area": this.CredtManag.getContent()[0].getContent()[8].getValue(),
                        "cca_description": this.CredtManag.getContent()[0].getContent()[10].getValue(),
                        "credit_segment": this.CredtManag.getContent()[0].getContent()[12].getValue(),
                        "cs_description": this.CredtManag.getContent()[0].getContent()[14].getValue()
                    };
                    var postObj = {
                        "d": buObj
                    };
                    this.CredtManag.setModel(new sap.ui.model.json.JSONModel(postObj));
                    if (this.CrdtMng == "new") {
                        oModel.create("/ZDD_CM_MASTER", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Credit Management added successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.CredtManag.getModel().updateBindings();
                        this.CredtManag.close();
                    } else {
                        oModel.update("/ZDD_CM_MASTER(salesorganization='" + encodeURIComponent(salesorganization) + "',distribution_channel='" + encodeURIComponent(distribution_channel) + "',division='" + encodeURIComponent(division) + "')", buObj, {
                            success: function (oData, oResponse) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.success("Changes saved successfully");

                            }.bind(this),
                            error: function (oError) {
                                jQuery.sap.require("sap.m.MessageBox");
                                sap.m.MessageBox.error(oError.message);
                            }
                        });
                        this.CredtManag.getModel().updateBindings();
                        this.CredtManag.close();
                    }
                } else {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.error("Please fill the required fields");
                }
            },
            handleEditCreditManag: function (evt) {
                this.CrdtMng = "edit";
                this.CredtManag.setTitle("Edit Credit Management");
                var salesorganization = evt.getSource().getBindingContext().getObject().salesorganization;
                var distribution_channel = evt.getSource().getBindingContext().getObject().distribution_channel;
                var division = evt.getSource().getBindingContext().getObject().division;
                var credit_control_area = evt.getSource().getBindingContext().getObject().credit_control_area;
                var cca_description = evt.getSource().getBindingContext().getObject().cca_description;
                var credit_segment = evt.getSource().getBindingContext().getObject().credit_segment;
                var cs_description = evt.getSource().getBindingContext().getObject().cs_description;
                this.CredtManag.getContent()[0].getContent()[2].setValue(salesorganization).setEditable(false);
                this.CredtManag.getContent()[0].getContent()[4].setValue(distribution_channel).setEditable(false);
                this.CredtManag.getContent()[0].getContent()[6].setValue(division).setEditable(false);
                this.CredtManag.getContent()[0].getContent()[8].setValue(credit_control_area);
                this.CredtManag.getContent()[0].getContent()[10].setValue(cca_description);
                this.CredtManag.getContent()[0].getContent()[12].setValue(credit_segment);
                this.CredtManag.getContent()[0].getContent()[14].setValue(cs_description);
                this.CredtManag.open();
            },
            onCreditManagCancel: function (evt) {
                this.CredtManag.close();
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
            },
            navigateToCredtMang: function () {
                this.getSplitContObj().toDetail(this.createId("detail19"));
            }
        });
    });