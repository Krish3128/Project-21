function hasCollided(Lbullet,Lwall)
{
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightaEdge>=wallLeftEdge)
   {

    return true;

   }
   else{
   return false;
   }
}