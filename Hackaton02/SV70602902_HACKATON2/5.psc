Proceso TIENDA_DESCUENTO
	Escribir " INGRESE LA CANTIDAD DE ZAPATOS QUE SE COMPR�"
	Leer ZAPATOS
	Si ZAPATOS = TRUNC(ZAPATOS) Entonces
		Si ZAPATOS > 10 Y ZAPATOS <=20  Entonces
			Escribir " POR COMPRAR LA CANTIDAD DE " , ZAPATOS, " ZAPATOS, SE LE APLICARA 10 % DSCT "
			Escribir " EN TOTAL SE PAGAR� " , (ZAPATOS*80)-(ZAPATOS*80*0.1)
		SiNo
			Si ZAPATOS > 20 Y ZAPATOS <=30  Entonces
				Escribir " POR COMPRAR LA CANTIDAD DE " , ZAPATOS, " ZAPATOS, SE LE APLICARA 20 % DSCT "
				Escribir " EN TOTAL SE PAGAR� " , (ZAPATOS*80)-(ZAPATOS*80*0.2)
			SiNo
				Si ZAPATOS > 30  Entonces
					Escribir " POR COMPRAR LA CANTIDAD DE " , ZAPATOS, " ZAPATOS, SE LE APLICARA 40 % DSCT "
					Escribir " EN TOTAL SE PAGAR� " , (ZAPATOS*80)-(ZAPATOS*80*0.4)
				Fin Si
			Fin Si
		Fin Si
	SiNo
		Escribir " ESTA CANTIDAD NO ES VALIDA "
	Fin Si
	
FinProceso
