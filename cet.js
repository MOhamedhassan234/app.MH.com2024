$(document).on('click', '.close-preview', function () {
    var parent = $(this).parents('.image-preview');
    parent.find('.popover ').removeClass('in');
});

$(document).on('click', '.image-preview-filename', function () {
    // alert('asfd');
    var parent = $(this).parents('.image-preview');
    parent.find('.popover ').addClass('in');
});

$(function () {

    // Clear event
    $('.image-preview-clear').click(function () {
        var parent = $(this).parents('.image-preview');
        parent.find('.image-preview-filename').val("");
        parent.find('.image-preview-clear').hide();
        parent.find('.image-preview-input input:file').val("");
        parent.find(".image-preview-input-title").text("  Browse");
    });
    // Create the preview image
    $(".image-preview-input input:file").change(function () {
        var parent = $(this).parents('.image-preview');
        var img = parent.find('.popover-content img');
        // parent.find
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            parent.find(".image-preview-input-title").text("Change");
            parent.find(".image-preview-clear").show();
            parent.find(".image-preview-filename").val(file.name);
            img.attr('src', e.target.result);
            // $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }
        reader.readAsDataURL(file);
    });
});
$('.timepicker').timepicker();