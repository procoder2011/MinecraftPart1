var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 30;
player_y = 30;
var player_objects= "";
var block_image_object= "";
function player_update()
{
    fabric.Image.fromUrl("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToWidth(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.image.fromUrl(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);

    });
}