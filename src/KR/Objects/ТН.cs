﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KR
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// ТН.
    /// </summary>
    // *** Start programmer edit section *** (ТН CustomAttributes)

    // *** End programmer edit section *** (ТН CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТНE", new string[] {
            "Цвет as \'Цвет\'",
            "ДатаПоставки as \'Дата поставки\'",
            "НомерТС as \'Номер ТС\'",
            "ИмяМат as \'Имя мат\'",
            "Поставщик as \'Поставщик\'",
            "НомерТН as \'Номер ТН\'",
            "Принял as \'Принял\'",
            "Состав as \'Состав\'",
            "ЗаписьМат as \'Запись мат\'",
            "ЗаписьМат.Материал as \'Материал\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.Должность as \'Должность\'"}, Hidden=new string[] {
            "ЗаписьМат.Материал",
            "Сотрудники.Должность"})]
    [MasterViewDefineAttribute("ТНE", "ЗаписьМат", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Материал")]
    [MasterViewDefineAttribute("ТНE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Должность")]
    [View("ТНL", new string[] {
            "Цвет as \'Цвет\'",
            "ДатаПоставки as \'Дата поставки\'",
            "НомерТС as \'Номер ТС\'",
            "ИмяМат as \'Имя мат\'",
            "Поставщик as \'Поставщик\'",
            "НомерТН as \'Номер ТН\'",
            "Принял as \'Принял\'",
            "Состав as \'Состав\'",
            "ЗаписьМат.Материал as \'Материал\'",
            "Сотрудники.Должность as \'Должность\'"})]
    public class ТН : ICSSoft.STORMNET.DataObject
    {
        
        private string fЦвет;
        
        private string fДатаПоставки;
        
        private string fНомерТС;
        
        private string fИмяМат;
        
        private string fПоставщик;
        
        private int fНомерТН;
        
        private string fПринял;
        
        private string fСостав;
        
        private IIS.KR.ЗаписьМат fЗаписьМат;
        
        private IIS.KR.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (ТН CustomMembers)

        // *** End programmer edit section *** (ТН CustomMembers)

        
        /// <summary>
        /// ДатаПоставки.
        /// </summary>
        // *** Start programmer edit section *** (ТН.ДатаПоставки CustomAttributes)

        // *** End programmer edit section *** (ТН.ДатаПоставки CustomAttributes)
        [StrLen(255)]
        public virtual string ДатаПоставки
        {
            get
            {
                // *** Start programmer edit section *** (ТН.ДатаПоставки Get start)

                // *** End programmer edit section *** (ТН.ДатаПоставки Get start)
                string result = this.fДатаПоставки;
                // *** Start programmer edit section *** (ТН.ДатаПоставки Get end)

                // *** End programmer edit section *** (ТН.ДатаПоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.ДатаПоставки Set start)

                // *** End programmer edit section *** (ТН.ДатаПоставки Set start)
                this.fДатаПоставки = value;
                // *** Start programmer edit section *** (ТН.ДатаПоставки Set end)

                // *** End programmer edit section *** (ТН.ДатаПоставки Set end)
            }
        }
        
        /// <summary>
        /// ИмяМат.
        /// </summary>
        // *** Start programmer edit section *** (ТН.ИмяМат CustomAttributes)

        // *** End programmer edit section *** (ТН.ИмяМат CustomAttributes)
        [StrLen(255)]
        public virtual string ИмяМат
        {
            get
            {
                // *** Start programmer edit section *** (ТН.ИмяМат Get start)

                // *** End programmer edit section *** (ТН.ИмяМат Get start)
                string result = this.fИмяМат;
                // *** Start programmer edit section *** (ТН.ИмяМат Get end)

                // *** End programmer edit section *** (ТН.ИмяМат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.ИмяМат Set start)

                // *** End programmer edit section *** (ТН.ИмяМат Set start)
                this.fИмяМат = value;
                // *** Start programmer edit section *** (ТН.ИмяМат Set end)

                // *** End programmer edit section *** (ТН.ИмяМат Set end)
            }
        }
        
        /// <summary>
        /// НомерТН.
        /// </summary>
        // *** Start programmer edit section *** (ТН.НомерТН CustomAttributes)

        // *** End programmer edit section *** (ТН.НомерТН CustomAttributes)
        public virtual int НомерТН
        {
            get
            {
                // *** Start programmer edit section *** (ТН.НомерТН Get start)

                // *** End programmer edit section *** (ТН.НомерТН Get start)
                int result = this.fНомерТН;
                // *** Start programmer edit section *** (ТН.НомерТН Get end)

                // *** End programmer edit section *** (ТН.НомерТН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.НомерТН Set start)

                // *** End programmer edit section *** (ТН.НомерТН Set start)
                this.fНомерТН = value;
                // *** Start programmer edit section *** (ТН.НомерТН Set end)

                // *** End programmer edit section *** (ТН.НомерТН Set end)
            }
        }
        
        /// <summary>
        /// НомерТС.
        /// </summary>
        // *** Start programmer edit section *** (ТН.НомерТС CustomAttributes)

        // *** End programmer edit section *** (ТН.НомерТС CustomAttributes)
        [StrLen(255)]
        public virtual string НомерТС
        {
            get
            {
                // *** Start programmer edit section *** (ТН.НомерТС Get start)

                // *** End programmer edit section *** (ТН.НомерТС Get start)
                string result = this.fНомерТС;
                // *** Start programmer edit section *** (ТН.НомерТС Get end)

                // *** End programmer edit section *** (ТН.НомерТС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.НомерТС Set start)

                // *** End programmer edit section *** (ТН.НомерТС Set start)
                this.fНомерТС = value;
                // *** Start programmer edit section *** (ТН.НомерТС Set end)

                // *** End programmer edit section *** (ТН.НомерТС Set end)
            }
        }
        
        /// <summary>
        /// Поставщик.
        /// </summary>
        // *** Start programmer edit section *** (ТН.Поставщик CustomAttributes)

        // *** End programmer edit section *** (ТН.Поставщик CustomAttributes)
        [StrLen(255)]
        public virtual string Поставщик
        {
            get
            {
                // *** Start programmer edit section *** (ТН.Поставщик Get start)

                // *** End programmer edit section *** (ТН.Поставщик Get start)
                string result = this.fПоставщик;
                // *** Start programmer edit section *** (ТН.Поставщик Get end)

                // *** End programmer edit section *** (ТН.Поставщик Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.Поставщик Set start)

                // *** End programmer edit section *** (ТН.Поставщик Set start)
                this.fПоставщик = value;
                // *** Start programmer edit section *** (ТН.Поставщик Set end)

                // *** End programmer edit section *** (ТН.Поставщик Set end)
            }
        }
        
        /// <summary>
        /// Принял.
        /// </summary>
        // *** Start programmer edit section *** (ТН.Принял CustomAttributes)

        // *** End programmer edit section *** (ТН.Принял CustomAttributes)
        [StrLen(255)]
        public virtual string Принял
        {
            get
            {
                // *** Start programmer edit section *** (ТН.Принял Get start)

                // *** End programmer edit section *** (ТН.Принял Get start)
                string result = this.fПринял;
                // *** Start programmer edit section *** (ТН.Принял Get end)

                // *** End programmer edit section *** (ТН.Принял Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.Принял Set start)

                // *** End programmer edit section *** (ТН.Принял Set start)
                this.fПринял = value;
                // *** Start programmer edit section *** (ТН.Принял Set end)

                // *** End programmer edit section *** (ТН.Принял Set end)
            }
        }
        
        /// <summary>
        /// Состав.
        /// </summary>
        // *** Start programmer edit section *** (ТН.Состав CustomAttributes)

        // *** End programmer edit section *** (ТН.Состав CustomAttributes)
        [StrLen(255)]
        public virtual string Состав
        {
            get
            {
                // *** Start programmer edit section *** (ТН.Состав Get start)

                // *** End programmer edit section *** (ТН.Состав Get start)
                string result = this.fСостав;
                // *** Start programmer edit section *** (ТН.Состав Get end)

                // *** End programmer edit section *** (ТН.Состав Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.Состав Set start)

                // *** End programmer edit section *** (ТН.Состав Set start)
                this.fСостав = value;
                // *** Start programmer edit section *** (ТН.Состав Set end)

                // *** End programmer edit section *** (ТН.Состав Set end)
            }
        }
        
        /// <summary>
        /// Цвет.
        /// </summary>
        // *** Start programmer edit section *** (ТН.Цвет CustomAttributes)

        // *** End programmer edit section *** (ТН.Цвет CustomAttributes)
        [StrLen(255)]
        public virtual string Цвет
        {
            get
            {
                // *** Start programmer edit section *** (ТН.Цвет Get start)

                // *** End programmer edit section *** (ТН.Цвет Get start)
                string result = this.fЦвет;
                // *** Start programmer edit section *** (ТН.Цвет Get end)

                // *** End programmer edit section *** (ТН.Цвет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.Цвет Set start)

                // *** End programmer edit section *** (ТН.Цвет Set start)
                this.fЦвет = value;
                // *** Start programmer edit section *** (ТН.Цвет Set end)

                // *** End programmer edit section *** (ТН.Цвет Set end)
            }
        }
        
        /// <summary>
        /// ТН.
        /// </summary>
        // *** Start programmer edit section *** (ТН.ЗаписьМат CustomAttributes)

        // *** End programmer edit section *** (ТН.ЗаписьМат CustomAttributes)
        [PropertyStorage(new string[] {
                "ЗаписьМат"})]
        [NotNull()]
        public virtual IIS.KR.ЗаписьМат ЗаписьМат
        {
            get
            {
                // *** Start programmer edit section *** (ТН.ЗаписьМат Get start)

                // *** End programmer edit section *** (ТН.ЗаписьМат Get start)
                IIS.KR.ЗаписьМат result = this.fЗаписьМат;
                // *** Start programmer edit section *** (ТН.ЗаписьМат Get end)

                // *** End programmer edit section *** (ТН.ЗаписьМат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.ЗаписьМат Set start)

                // *** End programmer edit section *** (ТН.ЗаписьМат Set start)
                this.fЗаписьМат = value;
                // *** Start programmer edit section *** (ТН.ЗаписьМат Set end)

                // *** End programmer edit section *** (ТН.ЗаписьМат Set end)
            }
        }
        
        /// <summary>
        /// ТН.
        /// </summary>
        // *** Start programmer edit section *** (ТН.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ТН.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.KR.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ТН.Сотрудники Get start)

                // *** End programmer edit section *** (ТН.Сотрудники Get start)
                IIS.KR.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ТН.Сотрудники Get end)

                // *** End programmer edit section *** (ТН.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТН.Сотрудники Set start)

                // *** End programmer edit section *** (ТН.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ТН.Сотрудники Set end)

                // *** End programmer edit section *** (ТН.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТНE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТНE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТНE", typeof(IIS.KR.ТН));
                }
            }
            
            /// <summary>
            /// "ТНL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТНL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТНL", typeof(IIS.KR.ТН));
                }
            }
        }
    }
}
