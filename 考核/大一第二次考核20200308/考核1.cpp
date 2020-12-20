#include<stdio.h>
main()
{
	int i,j,t;
	int a[11];
	printf("请输入十个数：") ;
	for(i=1;i<=10;i++)
	{
		scanf("%d",&a[i]);
	}
	for(i=1;i<10;i++)
	{
		for(j=1;j<=10-i;j++)
		{
			if(a[j]>a[j+1])
			{
				t=a[j];
				a[j]=a[j+1];
				a[j+1]=t;
			}
		}
	}
	for(i=1;i<=10;i++) 
	{
		printf("%d ",a[i]);
	}
	 
	
 } 
