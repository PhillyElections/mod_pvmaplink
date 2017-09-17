<?php
//no direct access
defined('_JEXEC') or die('Direct Access to this location is not allowed.');

$language = JFactory::getLanguage();
$language->load('mod_pvmaplink', JPATH_ADMIN);
$document = &JFactory::getDocument();
$document->addStyleSheet("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css");
$document->addCustomTag('<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>');
$document->addCustomTag('<script src="/modules/mod_pvmaplink/js/maplink.js"></script>');

?>
<form action="/index.php" method="get" id="josForm" name="josForm" class="form-validate">
    <input type="text" id="address" name="address" width="90% !important" value="" class="inputbox" placeholder="<?=JText::_('ADDRESS PLACEHOLDER');?>" />
    <input type="hidden" name="option" value="com_voterapp" />
    <input type="hidden" name="tmpl" value="component" />
    <div id="map-canvas"></div>
</form>
